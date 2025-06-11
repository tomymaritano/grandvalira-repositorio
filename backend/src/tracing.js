const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);

let traceExporter;

// Solo uso el exporter en producción (o si la var está seteada explícitamente)
if (process.env.NODE_ENV === 'production' && process.env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  console.log(`Using OTLP exporter: ${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}`);
  traceExporter = new OTLPTraceExporter({
    url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/traces`,
  });
} else {
  console.log('OTLP exporter disabled (running in local/dev mode)');
}

const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

const initOpenTelemetry = async () => {
  try {
    await sdk.start();
    console.log('OpenTelemetry initialized');
  } catch (err) {
    console.error('Error initializing OpenTelemetry', err);
  }
};
initOpenTelemetry();

process.on('SIGTERM', async () => {
  try {
    await sdk.shutdown();
    console.log('OpenTelemetry terminated');
  } catch (err) {
    console.error('Error terminating OpenTelemetry', err);
  } finally {
    process.exit(0);
  }
});
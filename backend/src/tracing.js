const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ERROR);

// Only configure the OTLP exporter when an endpoint is provided.
// Otherwise the SDK will run without exporting traces to avoid
// connection errors during local development.
const traceExporter = process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  ? new OTLPTraceExporter({
      url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/traces`,
    })
  : undefined;



const initOpenTelemetry = async () => {
  try {
    await sdk.start();
    console.log('OpenTelemetry initialized');
  } catch (err) {
    console.log('Error initializing OpenTelemetry', err);
  }
};
initOpenTelemetry();

process.on('SIGTERM', async () => {
  try {
    await sdk.shutdown();
    console.log('OpenTelemetry terminated');
  } catch (err) {
    console.log('Error terminating OpenTelemetry', err);
  } finally {
    process.exit(0);
  }
});
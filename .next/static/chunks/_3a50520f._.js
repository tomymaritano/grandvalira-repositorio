(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/hooks/useApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useApi": (()=>useApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useApi = ()=>{
    _s();
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApi.useCallback[get]": async (url)=>{
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await response.json().catch({
                    "useApi.useCallback[get]": ()=>null
                }["useApi.useCallback[get]"]);
                if (!response.ok) {
                    let message = 'Request failed';
                    if (response.status === 401) message = 'Unauthorized';
                    return {
                        data,
                        ok: false,
                        status: response.status,
                        error: message
                    };
                }
                return {
                    data,
                    ok: true,
                    status: response.status
                };
            } catch (error) {
                console.error('GET error:', error);
                return {
                    data: null,
                    ok: false,
                    status: 0,
                    error: 'Network error'
                };
            }
        }
    }["useApi.useCallback[get]"], [
        token
    ]);
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApi.useCallback[post]": async (url, body)=>{
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                });
                const data = await response.json().catch({
                    "useApi.useCallback[post]": ()=>null
                }["useApi.useCallback[post]"]);
                if (!response.ok) {
                    let message = 'Request failed';
                    if (response.status === 401) message = 'Unauthorized';
                    return {
                        data,
                        ok: false,
                        status: response.status,
                        error: message
                    };
                }
                return {
                    data,
                    ok: true,
                    status: response.status
                };
            } catch (error) {
                console.error('POST error:', error);
                return {
                    data: null,
                    ok: false,
                    status: 0,
                    error: 'Network error'
                };
            }
        }
    }["useApi.useCallback[post]"], [
        token
    ]);
    return {
        get,
        post
    };
};
_s(useApi, "LMIWS79XbuCiB1AJzxLmMkL+s60=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useProtectedRoute.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useProtectedRoute": (()=>useProtectedRoute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const useProtectedRoute = (allowedRoles)=>{
    _s();
    const { token, role, isInitialized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProtectedRoute.useEffect": ()=>{
            if (!isInitialized) return;
            if (!token) {
                // Si no está autenticado → redirect a login
                router.push('/login');
            } else if (!allowedRoles.includes(role)) {
                // Si no tiene el role adecuado → redirect a contacts
                router.push('/contacts');
            }
        // Si pasa ambas validaciones, se queda en la página.
        }
    }["useProtectedRoute.useEffect"], [
        token,
        role,
        isInitialized,
        router,
        allowedRoles
    ]);
};
_s(useProtectedRoute, "oMmfsQisxwWDPL/OKLGKWC7bgSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/contacts/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProtectedRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useProtectedRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ToastProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ContactsPage() {
    _s();
    // Proteges esta página → todos los roles pueden entrar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProtectedRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProtectedRoute"])([
        'USER',
        'MODERATOR',
        'ADMIN'
    ]);
    const { get } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { isInitialized, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactsPage.useEffect": ()=>{
            // Esperamos que AuthContext esté inicializado y que haya token válido
            if (!isInitialized) return;
            if (!isAuthenticated) return;
            const fetchContacts = {
                "ContactsPage.useEffect.fetchContacts": async ()=>{
                    setIsLoading(true);
                    const { data, ok, error } = await get(`${("TURBOPACK compile-time value", "http://localhost:3000")}/contacts`);
                    console.log('API response:', data); // 👈 LOG IMPORTANTE
                    if (ok) {
                        // Si data es un array lo seteamos tal cual, si es un objeto con "contacts", lo extraemos
                        setContacts(Array.isArray(data) ? data : data?.contacts || []);
                    } else {
                        showToast(error || 'Failed to fetch contacts', 'error');
                    }
                    setIsLoading(false);
                }
            }["ContactsPage.useEffect.fetchContacts"];
            fetchContacts();
        }
    }["ContactsPage.useEffect"], [
        isInitialized,
        isAuthenticated,
        get,
        showToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-8 text-center text-gray-800",
                    children: "Contacts"
                }, void 0, false, {
                    fileName: "[project]/src/app/contacts/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow rounded-lg overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full leading-normal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3 bg-gray-50 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3 bg-gray-50 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/contacts/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contacts/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    contacts.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-5 border-b text-sm text-gray-700",
                                                    children: contact.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contacts/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-5 border-b text-sm text-gray-700",
                                                    children: contact.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contacts/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, contact.id, true, {
                                            fileName: "[project]/src/app/contacts/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)),
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 2,
                                            className: "px-5 py-5 border-b text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto h-5 w-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contacts/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contacts/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    !isLoading && contacts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 2,
                                            className: "px-5 py-5 border-b text-center text-gray-500",
                                            children: "No contacts found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contacts/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contacts/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contacts/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contacts/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contacts/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contacts/page.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/contacts/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ContactsPage, "rJiue+UA8UudVLyCJKIvp04IJUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useProtectedRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProtectedRoute"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ContactsPage;
var _c;
__turbopack_context__.k.register(_c, "ContactsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_3a50520f._.js.map
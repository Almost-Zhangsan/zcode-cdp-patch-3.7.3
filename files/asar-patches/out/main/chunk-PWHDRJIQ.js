import { a as c, b as ke } from "./chunk-LQDBAECE.js";
var Ar = "zh-CN";
var Zf = "3.7.3",
  jf = "934a0ddc",
  Bf = "2026-08-07T02:59:19.169Z";
function Su(e) {
  return e?.trim().toLowerCase() === "production" ? "production" : "test";
}
c(Su, "normalizeZCodeEnv");
var _u = Su("production"),
  Lf = "ZCODE_APP_VERSION",
  Wf = "ZCODE_BUILD_COMMIT_ID",
  Ff = typeof process < "u" ? process.env.ZCODE_DEBUG : void 0,
  qf =
    "https://proj-xtrace-7e235817c9b9381c22d8b743908d469f-cn-beijing.cn-beijing.log.aliyuncs.com/rum/web/v2?workspace=default-cms-1936221977589032-cn-beijing&service_id=j2c03hoppk@7023210754a92ac5d1971";
function Vf() {
  return _u === "production" ? "prod" : "local";
}
c(Vf, "mapZCodeEnvToArmsRumEnv");
var zr = "https://zcode.z.ai",
  Gf = "https://zcode.chatglm.site",
  Kf = "https://bigmodel.cn",
  Hf = "https://dev.bigmodel.cn",
  Jf = "https://chat.z.ai",
  Yf = "https://zai-test.chatglm.site",
  Xf = "https://api.z.ai",
  Qf = "https://api.chatglm.site",
  eh = "client_P8X5CMWmlaRO9gyO-KSqtg",
  th = "client_RzngVdSk8sYsG2_3HzOMdQ",
  nh = "wss://zcode.z.ai/ws",
  oh = "3.4.0";
function rh(e) {
  if (!e) return !1;
  let r = e
    .trim()
    .replace(/^v/i, "")
    .match(
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([^+]+))?(?:\+(.+))?$/,
    );
  if (!r) return !1;
  let a = r[4]?.split("."),
    n =
      a === void 0 ||
      a.every(
        (u) =>
          /^[0-9A-Za-z-]+$/.test(u) &&
          (!/^\d+$/.test(u) || /^(0|[1-9]\d*)$/.test(u)),
      ),
    i = r[5]?.split("."),
    s = i === void 0 || i.every((u) => /^[0-9A-Za-z-]+$/.test(u));
  if (!n || !s) return !1;
  let l = [Number(r[1]), Number(r[2]), Number(r[3])],
    p = oh.split(".").map(Number);
  for (let u = 0; u < p.length; u += 1) if (l[u] !== p[u]) return l[u] > p[u];
  return a === void 0;
}
c(rh, "isWebRemoteControlV4AppVersion");
function ce(e, o) {
  let r = e[o]?.trim();
  return r || void 0;
}
c(ce, "readRuntimeEnvValue");
function Mr(e, o, r, a) {
  return ce(e, o === "production" ? a : r);
}
c(Mr, "readRuntimeZCodeEnvScopedValue");
function he(e) {
  let o = e.trim();
  if (!o) throw new Error("ZCode endpoint origin is empty");
  let r = new URL(o);
  if (r.protocol !== "https:" && r.protocol !== "http:")
    throw new Error("ZCode endpoint origin must use http or https");
  return r.origin;
}
c(he, "normalizeZCodeEndpointOrigin");
function ih(e) {
  let o = e?.env ?? "test",
    r = e?.envBaseOrigin?.trim();
  if (o === "production") return r ? he(r) : zr;
  let a = e?.overrideOrigin?.trim();
  return a ? he(a) : r ? he(r) : Gf;
}
c(ih, "resolveZCodeEndpointOrigin");
function Wt(e = {}) {
  return e.ZCODE_ENV?.trim().toLowerCase() === "test" ? "test" : "production";
}
c(Wt, "resolveRuntimeZCodeEnv");
function xu(e = {}, o) {
  let r = Wt(e),
    a =
      r === "production"
        ? ce(e, "ZCODE_PRODUCTION_BASE_URL")
        : ce(e, "ZCODE_TEST_BASE_URL");
  return ih({
    env: r,
    envBaseOrigin:
      ce(e, "ZCODE_BASE_URL") ?? ce(e, "ZCODE_ENDPOINT_ORIGIN") ?? a,
    overrideOrigin: o?.overrideOrigin,
  });
}
c(xu, "resolveRuntimeZCodeEndpointOrigin");
function KI(e = {}) {
  return sh(xu(e));
}
c(KI, "buildRuntimeZCodeEndpointUrls");
function HI(e = {}, o) {
  let r = o.startsWith("/") ? o : `/${o}`;
  return `${xu(e)}${r}`;
}
c(HI, "buildRuntimeZCodeApiUrl");
function JI(e) {
  let o = e?.overrideUrl?.trim();
  return o || nh;
}
c(JI, "resolveWebRemoteControlRelayWsUrl");
function ah(e = {}) {
  let o = Wt(e),
    r =
      o === "production"
        ? ce(e, "BIGMODEL_PRODUCTION_API_BASE_URL")
        : ce(e, "BIGMODEL_TEST_API_BASE_URL"),
    a = o === "production" ? Kf : Hf;
  return he(ce(e, "BIGMODEL_API_BASE_URL") ?? r ?? a);
}
c(ah, "resolveBigModelApiOrigin");
function YI(e = {}, o) {
  let r = o.startsWith("/") ? o : `/${o}`;
  return `${ah(e)}${r}`;
}
c(YI, "buildBigModelApiUrl");
function XI(e = {}) {
  let o = Wt(e),
    r = Mr(e, o, "ZAI_TEST_OAUTH_ORIGIN", "ZAI_PRODUCTION_OAUTH_ORIGIN"),
    a = o === "production" ? Jf : Yf;
  return he(ce(e, "ZAI_OAUTH_ORIGIN") ?? r ?? a);
}
c(XI, "resolveZaiOAuthOrigin");
function QI(e = {}) {
  let o = Wt(e),
    r = Mr(
      e,
      o,
      "ZAI_TEST_BUSINESS_BASE_URL",
      "ZAI_PRODUCTION_BUSINESS_BASE_URL",
    ),
    a = o === "production" ? Xf : Qf;
  return he(ce(e, "ZAI_BUSINESS_BASE_URL") ?? r ?? a);
}
c(QI, "resolveZaiBusinessBaseUrl");
function eC(e = {}) {
  let o = Wt(e),
    r = Mr(e, o, "ZAI_TEST_OAUTH_CLIENT_ID", "ZAI_PRODUCTION_OAUTH_CLIENT_ID"),
    a = o === "production" ? eh : th;
  return ce(e, "ZAI_OAUTH_CLIENT_ID") ?? r ?? ce(e, "ZAI_OAUTH_APP_ID") ?? a;
}
c(eC, "resolveZaiOAuthClientId");
function sh(e, o = {}) {
  let r = he(e),
    a = new URL(r),
    i = `${a.protocol === "https:" ? "wss:" : "ws:"}//${a.host}`,
    s = rh(o.appVersion) ? "v4" : "v3";
  return {
    origin: r,
    apiBaseUrl: `${r}/api/v1`,
    remoteUrl: `${r}/remote/${s}`,
    webRemoteCallbackUrl: `${r}/web-remote/callback`,
    relayWsUrl: `${i}/ws`,
    zcodePlanOpenAiBaseUrl: `${r}/api/v1/zcode-plan`,
    zcodePlanAnthropicBaseUrl: `${r}/api/v1/zcode-plan/anthropic`,
    zcodePlanBillingCurrentUrl: `${r}/api/v1/zcode-plan/billing/current`,
    zcodePlanBillingBalanceUrl: `${r}/api/v1/zcode-plan/billing/balance`,
  };
}
c(sh, "buildZCodeEndpointUrls");
function tC(e, o) {
  let r = typeof e == "string" ? e : e.toString(),
    a;
  try {
    a = new URL(r);
  } catch {
    return e;
  }
  let n = zr;
  if (a.origin !== n) return e;
  let i = he(o);
  if (i === n) return e;
  let s = new URL(i);
  return (
    (s.pathname = a.pathname),
    (s.search = a.search),
    (s.hash = a.hash),
    s.toString()
  );
}
c(tC, "rewriteZCodeEndpointUrl");
var ch = "ZCODE_RUNTIME_ENV";
var ku = "ZCODE_TOOL_ENV_PASSTHROUGH_JSON",
  Iu = [
    "NODE_ENV",
    "ELECTRON_RUN_AS_NODE",
    "NODE_NO_WARNINGS",
    "HTTP_PROXY",
    "HTTPS_PROXY",
    "ALL_PROXY",
    "NO_PROXY",
    "NODE_EXTRA_CA_CERTS",
    "SSL_CERT_FILE",
    "SSL_CERT_DIR",
    "REQUESTS_CA_BUNDLE",
    "CURL_CA_BUNDLE",
    "GIT_SSL_CAINFO",
    "ZCODE_CUA_PERMISSION_BROKER_TOKEN",
    "ZCODE_CUA_PERMISSION_BROKER_SOCKET",
    "OTEL_EXPORTER_OTLP_ENDPOINT",
    "OTEL_EXPORTER_OTLP_TRACES_ENDPOINT",
    "OTEL_EXPORTER_OTLP_HEADERS",
    "OTEL_EXPORTER_OTLP_TRACES_HEADERS",
    "OTEL_SERVICE_NAME",
    "OTEL_RESOURCE_ATTRIBUTES",
    "OTEL_EXPORTER_OTLP_COMPRESSION",
    "ZCODE_MODEL_TELEMETRY_ENABLED",
    "ZCODE_TELEMETRY_DEVICE_MID",
    "ZCODE_TELEMETRY_USER_ID",
    "ZCODE_TELEMETRY_USER_ID_HASH",
    "ZCODE_TELEMETRY_USER_SUBJECT_ID",
    "ZCODE_TELEMETRY_IDENTITY_STATE",
    "ZCODE_TELEMETRY_RUNTIME_SURFACE",
    "ZCODE_TELEMETRY_RUNTIME_DISTRIBUTION",
  ],
  lh = [
    "NODE_ENV",
    "ELECTRON_RUN_AS_NODE",
    "NODE_NO_WARNINGS",
    "ZCODE_CUA_PERMISSION_BROKER_TOKEN",
    "ZCODE_CUA_PERMISSION_BROKER_SOCKET",
  ],
  dh =
    /^(npm_config|yarn|pnpm)_(http_proxy|https_proxy|proxy|all_proxy|no_proxy|cafile|ca)$/i;
function uh(e) {
  let o = e?.trim().toLowerCase();
  if (o === "development" || o === "production" || o === "test") return o;
}
c(uh, "normalizeZCodeRuntimeEnv");
function aC(e, o = "production") {
  return uh(e[ch]) ?? o;
}
c(aC, "resolveZCodeRuntimeEnv");
var ph = "ZCODE_CUA_PERMISSION_BROKER_SOCKET",
  mh = "ZCODE_CUA_PERMISSION_BROKER_TOKEN",
  gh,
  fh,
  hh = {};
function yh(e) {
  let o = e[ph]?.trim(),
    r = e[mh]?.trim();
  (o && (gh = o), r && (fh = r));
}
c(yh, "captureZCodeCuaBrokerCredentials");
function bh(e) {
  Object.assign(hh, vh(e));
}
c(bh, "captureZCodeAgentTelemetryEnv");
function vh(e) {
  let o = {};
  for (let r of Iu) {
    if (!Cu(r)) continue;
    let a = e[r]?.trim();
    a && (o[r] = a);
  }
  return o;
}
c(vh, "readZCodeAgentTelemetryEnv");
function sC(e) {
  (yh(e), bh(e));
  let o = {};
  for (let [r, a] of Object.entries(e)) a === void 0 || Ru(r) || (o[r] = a);
  return o;
}
c(sC, "sanitizeZCodeRuntimeEnv");
function cC(e) {
  let o = Sh(e);
  for (let [r, a] of Object.entries(e)) a === void 0 || !Pu(r) || (o[r] = a);
  return _h(o);
}
c(cC, "buildZCodeToolEnvPassthroughEnv");
function Sh(e) {
  let o = e[ku];
  if (!o) return {};
  try {
    let r = JSON.parse(o);
    if (!r || typeof r != "object" || Array.isArray(r)) return {};
    let a = {};
    for (let [n, i] of Object.entries(r))
      typeof i == "string" &&
        /^[A-Za-z_][A-Za-z0-9_]*$/.test(n) &&
        Pu(n) &&
        (a[n] = i);
    return a;
  } catch {
    return {};
  }
}
c(Sh, "readZCodeToolEnvPassthroughEnv");
function Cu(e) {
  return (
    e.startsWith("OTEL_") ||
    e.startsWith("ZCODE_TELEMETRY_") ||
    e === "ZCODE_MODEL_TELEMETRY_ENABLED"
  );
}
c(Cu, "isZCodeAgentTelemetryEnvKey");
function Ru(e) {
  let o = e.toUpperCase();
  return Iu.some((r) => r === o) || dh.test(e);
}
c(Ru, "shouldSanitizeZCodeRuntimeEnvKey");
function Pu(e) {
  let o = e.toUpperCase();
  return Cu(o) || lh.some((r) => r === o) ? !1 : Ru(e);
}
c(Pu, "shouldCaptureZCodeToolEnvPassthroughKey");
function _h(e) {
  let o = Object.entries(e).sort(([r], [a]) => r.localeCompare(a));
  return o.length === 0 ? {} : { [ku]: JSON.stringify(Object.fromEntries(o)) };
}
c(_h, "stringifyZCodeToolEnvPassthroughEnv");
var mC = {
    File: "file",
    System: "system",
    Terminal: "terminal",
    Git: "git",
    GitCheckpoint: "git-checkpoint",
    Setting: "setting",
    Credential: "credential",
    Broadcast: "broadcast",
    ZCodeTask: "zcode-task",
    ZCodeAgent: "zcode-agent",
    ZCodeSession: "zcode-session",
    FileWatcher: "file-watcher",
    OAuth: "oauth",
    ModelProvider: "model-provider",
    UsageStats: "usage-stats",
    CodingPlanSubscription: "coding-plan-subscription",
    Skills: "skills",
    SkillSync: "skill-sync",
    McpSync: "mcp-sync",
    PluginSync: "plugin-sync",
    Plugins: "plugins",
    PluginManagement: "plugin-management",
    Subagents: "subagents",
    Commands: "commands",
    Hooks: "hooks",
    Memory: "memory",
    OutputStyle: "output-style",
    SettingsSync: "settings-sync",
    Bots: "bots",
    Feedback: "feedback",
    RepoWiki: "repo-wiki",
    PromptAttachmentTransfer: "prompt-attachment-transfer",
    OffPeakTask: "off-peak-task",
  },
  gC = {
    SelectDirectory: "zcode:select-directory",
    SelectFile: "zcode:select-file",
    SelectFiles: "zcode:select-files",
    CreateTempTextAttachment: "zcode:create-temp-text-attachment",
    SaveFile: "zcode:save-file",
    PrintToPdf: "zcode:print-to-pdf",
    RemoteConnectionLog: "zcode:remote-connection-log",
    RemoteSessionClosed: "zcode:remote-session-closed",
    BotRemoteWorkspaceReconnected: "zcode:bot-remote-workspace-reconnected",
    ActivateOrSetWorkspace: "zcode:activate-or-set-workspace",
    ConnectRemote: "zcode:connect-remote",
    CancelPendingRemoteConnection: "zcode:cancel-pending-remote-connection",
    BindRemoteWorkspaceSessionContext:
      "zcode:bind-remote-workspace-session-context",
    StartWebRemoteControl: "zcode:start-web-remote-control",
    ResetWebRemoteControlPairing: "zcode:reset-web-remote-control-pairing",
    StopWebRemoteControl: "zcode:stop-web-remote-control",
    GetWebRemoteControlStatus: "zcode:get-web-remote-control-status",
    WebRemoteControlStatusChanged: "zcode:web-remote-control-status-changed",
    DisposeRemoteSession: "zcode:dispose-remote-session",
    IsDockerAvailable: "zcode:is-docker-available",
    ListWSLDistros: "zcode:list-wsl-distros",
    ListDockerContainers: "zcode:list-docker-containers",
    ListSSHConfigAliases: "zcode:list-ssh-config-aliases",
    LoadMcpFromUserDirectory: "zcode:load-mcp-from-user-directory",
    SaveMcpToUserDirectory: "zcode:save-mcp-to-user-directory",
    Log: "zcode:log",
    SyncWindowTabs: "zcode:sync-window-tabs",
    SyncWebRemoteControlWorkspaces: "zcode:sync-web-remote-control-workspaces",
    SyncWebRemoteControlTasks: "zcode:sync-web-remote-control-tasks",
    WebRemoteControlReconnectWorkspace:
      "zcode:web-remote-control-reconnect-workspace",
    SyncWindowUnreadCount: "zcode:sync-window-unread-count",
    SyncAppSettings: "zcode:sync-app-settings",
    FocusTab: "zcode:focus-tab",
    NewTab: "zcode:new-tab",
    CloseActiveContextRequest: "zcode:close-active-context-request",
    OpenBrowserUrl: "zcode:open-browser-url",
    BrowserViewReady: "zcode:browser-view-ready",
    BrowserViewOperation: "zcode:browser-view-operation",
    BrowserViewVisibility: "zcode:browser-view-visibility",
    BrowserViewViewportChanged: "zcode:browser-view-viewport-changed",
    BrowserViewScreenshotSurfacePrepare:
      "zcode:browser-view-screenshot-surface-prepare",
    BrowserViewScreenshotSurfaceReady:
      "zcode:browser-view-screenshot-surface-ready",
    BrowserViewScreenshotSurfaceRelease:
      "zcode:browser-view-screenshot-surface-release",
    BrowserViewCloseTab: "zcode:browser-view-close-tab",
    BrowserViewSuspend: "zcode:browser-view-suspend",
    BrowserViewRestore: "zcode:browser-view-restore",
    NewTask: "zcode:new-task",
    OpenWorkspace: "zcode:open-workspace",
    OpenWorkspacePath: "zcode:open-workspace-path",
    OpenFeedbackDialog: "zcode:open-feedback-dialog",
    OpenTicketsPanel: "zcode:open-tickets-panel",
    WindowFullscreenChanged: "zcode:window-fullscreen-changed",
    GetDesktopWindowChromeState: "zcode:get-desktop-window-chrome-state",
    DesktopWindowChromeStateChanged:
      "zcode:desktop-window-chrome-state-changed",
    WindowControlsOverlayChanged: "zcode:window-controls-overlay-changed",
    WindowControlsOverlayReady: "zcode:window-controls-overlay-ready",
    GetProcessMetrics: "zcode:get-process-metrics",
    OpenProcessMonitor: "zcode:open-process-monitor",
    OpenExternal: "zcode:open-external",
    CanOpenCommunity: "zcode:can-open-community",
    OpenInFileManager: "zcode:open-in-file-manager",
    OpenCuaPermissionOnboarding: "zcode:open-cua-permission-onboarding",
    PrepareCuaHelperPermissionDrag: "zcode:prepare-cua-helper-permission-drag",
    StartCuaHelperPermissionDrag: "zcode:start-cua-helper-permission-drag",
    OpenCuaAccessibilitySettings: "zcode:open-cua-accessibility-settings",
    OAuthRegisterState: "zcode:oauth-register-state",
    OAuthCallback: "zcode:oauth-callback",
    PaymentCallback: "zcode:payment-callback",
    OAuthCallbackHandled: "zcode:oauth-callback-handled",
    RendererReady: "zcode:renderer-ready",
    SyncTelemetryContext: "zcode:sync-telemetry-context",
    ReportTelemetryEvent: "zcode:report-telemetry-event",
    ReportArmsCustomEvent: "zcode:report-arms-custom-event",
    ReadFinalArmsCustomEventsE2E: "zcode:e2e:read-final-arms-custom-events",
    ClearFinalArmsCustomEventsE2E: "zcode:e2e:clear-final-arms-custom-events",
    ConfigureFinalArmsCustomEventsE2E:
      "zcode:e2e:configure-final-arms-custom-events",
    ShowTaskNotification: "zcode:show-task-notification",
    TaskNotificationSound: "zcode:task-notification-sound",
    TaskNotificationClick: "zcode:task-notification-click",
    ExportLogs: "zcode:export-logs",
    CaptureWindowScreenshot: "zcode:capture-window-screenshot",
    BrowserViewAttachGuest: "zcode:browser-view-attach-guest",
    BrowserViewCloseTabFromRenderer:
      "zcode:browser-view-close-tab-from-renderer",
    BrowserViewReportResidency: "zcode:browser-view-report-residency",
    BrowserViewSuspendReady: "zcode:browser-view-suspend-ready",
    BrowserViewEnsureResident: "zcode:browser-view-ensure-resident",
    BrowserViewRestoreTabs: "zcode:browser-view-restore-tabs",
    BrowserViewUpdateViewport: "zcode:browser-view-update-viewport",
    EmbeddedBrowserJavaScriptDialog: "zcode:embedded-browser-javascript-dialog",
    ImportChromeBrowserData: "zcode:import-chrome-browser-data",
    ClearEmbeddedBrowserData: "zcode:clear-embedded-browser-data",
    StartPerformanceTrace: "zcode:perf:start",
    StopPerformanceTrace: "zcode:perf:stop",
    UpdateReady: "zcode:update-ready",
    UpdateCheckResult: "zcode:update-check-result",
    UpdateStateChanged: "zcode:update-state-changed",
    GetUpdateState: "zcode:get-update-state",
    DownloadUpdate: "zcode:download-update",
    CancelUpdateDownload: "zcode:cancel-update-download",
    OpenUpdateStatusWindow: "zcode:open-update-status-window",
    GetAutoUpdatePreferences: "zcode:get-auto-update-preferences",
    SetAutoDownloadAndInstallUpdates:
      "zcode:set-auto-download-and-install-updates",
    GetDesktopSessionActivity: "zcode:get-desktop-session-activity",
    GetDesktopZoomLevel: "zcode:get-desktop-zoom-level",
    DesktopZoomLevelChanged: "zcode:desktop-zoom-level-changed",
    GetZCodeStdioTapDevState: "zcode:get-zcode-stdio-tap-dev-state",
    SettingsChanged: "zcode:settings-changed",
    ApplicationLocaleChanged: "zcode:application-locale-changed",
    GetSystemLocale: "zcode:get-system-locale",
    PostUpdateReleaseNotes: "zcode:post-update-release-notes",
    AcknowledgePostUpdateReleaseNotes: "zcode:ack-post-update-release-notes",
    SkipUpdateVersion: "zcode:skip-update-version",
    QuitAndInstallUpdate: "zcode:quit-and-install-update",
    GetInstalledEditors: "zcode:get-installed-editors",
    OpenInEditor: "zcode:open-in-editor",
    ExecuteDesktopCommand: "zcode:execute-desktop-command",
    SetApplicationLocale: "zcode:set-application-locale",
    SetTitleBarTheme: "zcode:set-title-bar-theme",
    MigrateLegacyCommonMcp: "zcode:migrate-legacy-common-mcp",
    GetDeviceId: "zcode:get-device-id",
  };
var fC = {
  ServicePort: "zcode:service-port",
  RemoteServicePort: "zcode:remote-service-port",
  TaskNotificationSound: "zcode:task-notification-sound",
};
var hC = {
    InitLocal: "init-local",
    InitRemote: "init-remote",
    InitRemoteWorkspace: "init-remote-workspace",
    InitRemoteSshHost: "init-remote-ssh-host",
    InitRemoteWslHost: "init-remote-wsl-host",
    AttachServicePort: "attach-service-port",
    DetachServicePort: "detach-service-port",
    AcquireRemoteWorkspace: "acquire-remote-workspace",
    ReleaseRemoteWorkspace: "release-remote-workspace",
    Dispose: "dispose",
    Broadcast: "broadcast",
    TaskRealtimeDeliver: "task-realtime-deliver",
    TaskRunLeaseResult: "task-run-lease-result",
    TaskOwnerCommandDeliver: "task-owner-command-deliver",
    TaskOwnerCommandResult: "task-owner-command-result",
    BotRemoteWorkspaceReconnectResult: "bot-remote-workspace-reconnect-result",
    BotRemoteWorkspaceConnectionStatusResult:
      "bot-remote-workspace-connection-status-result",
    BotRemoteWorkspaceRuntimePort: "bot-remote-workspace-runtime-port",
    SessionMessageDeliver: "session-message-deliver",
    SessionMessageDeliveryResult: "session-message-delivery-result",
    FeedbackLogArchiveResult: "feedback-log-archive-result",
    CronRun: "cron-run",
    OffPeakRun: "off-peak-run",
    BrowserExecuteResult: "browser-execute-result",
  },
  yC = {
    Connected: "connected",
    Error: "error",
    Log: "log",
    AgentProcessSpawned: "agent-process-spawned",
    AgentProcessReady: "agent-process-ready",
    AgentProcessExited: "agent-process-exited",
    AgentProcessError: "agent-process-error",
    AgentResourceSample: "agent-resource-sample",
    AgentRunningTaskCountChanged: "agent-running-task-count-changed",
    WorkspaceRunningTaskCountChanged: "workspace-running-task-count-changed",
    RemoteWorkspaceAcquired: "remote-workspace-acquired",
    RepoWikiRunningTaskCountChanged: "repo-wiki-running-task-count-changed",
    Broadcast: "broadcast",
    TaskRealtimePublish: "task-realtime-publish",
    TaskStreamOpPublish: "task-stream-op-publish",
    TaskRunLeaseAcquire: "task-run-lease-acquire",
    TaskRunLeaseRelease: "task-run-lease-release",
    TaskOwnerCommandRequest: "task-owner-command-request",
    TaskOwnerCommandResult: "task-owner-command-result",
    BotRemoteWorkspaceReconnectRequest:
      "bot-remote-workspace-reconnect-request",
    BotRemoteWorkspaceConnectionStatusRequest:
      "bot-remote-workspace-connection-status-request",
    BotRemoteWorkspaceRuntimePortRequest:
      "bot-remote-workspace-runtime-port-request",
    SessionMessageSendRequested: "session-message-send-requested",
    SessionRouteAnnounce: "session-route-announce",
    SessionMessageDeliverResult: "session-message-deliver-result",
    FeedbackLogArchiveRequest: "feedback-log-archive-request",
    CronRunResult: "cron-run-result",
    OffPeakRunResult: "off-peak-run-result",
    CronSchedulerWakeRequest: "cron-scheduler-wake-request",
    OffPeakSchedulerWakeRequest: "off-peak-scheduler-wake-request",
    BrowserExecuteRequest: "browser-execute-request",
    NetworkTelemetryBatch: "network-telemetry-batch",
  };
var xC = {
    file: "titleBar.menu.file",
    edit: "titleBar.menu.edit",
    view: "titleBar.menu.view",
    window: "titleBar.menu.window",
    help: "titleBar.menu.help",
    fileNewTask: "titleBar.menu.file.newTask",
    fileOpenWorkspace: "titleBar.menu.file.openWorkspace",
    fileCloseWindow: "titleBar.menu.file.closeWindow",
    editUndo: "titleBar.menu.edit.undo",
    editRedo: "titleBar.menu.edit.redo",
    editCut: "titleBar.menu.edit.cut",
    editCopy: "titleBar.menu.edit.copy",
    editPaste: "titleBar.menu.edit.paste",
    editSelectAll: "titleBar.menu.edit.selectAll",
    viewToggleFullScreen: "titleBar.menu.view.toggleFullScreen",
    viewActualSize: "titleBar.menu.view.actualSize",
    viewZoomIn: "titleBar.menu.view.zoomIn",
    viewZoomOut: "titleBar.menu.view.zoomOut",
    windowMinimize: "titleBar.menu.window.minimize",
    windowZoom: "titleBar.menu.window.zoom",
    windowBringAllToFront: "titleBar.menu.window.bringAllToFront",
    appServices: "titleBar.menu.app.services",
    appHide: "titleBar.menu.app.hide",
    appHideOthers: "titleBar.menu.app.hideOthers",
    appShowAll: "titleBar.menu.app.showAll",
    appQuit: "titleBar.menu.app.quit",
    helpAbout: "titleBar.menu.help.about",
    helpWhatsNew: "titleBar.menu.help.whatsNew",
    helpCheckForUpdates: "titleBar.menu.help.checkForUpdates",
    helpToggleDevTools: "titleBar.menu.help.toggleDevTools",
    helpProcessMonitor: "titleBar.menu.help.processMonitor",
    helpToggleZCodeStdioTap: "titleBar.menu.help.toggleZCodeStdioTap",
    helpZCodeEndpoint: "titleBar.menu.help.zcodeEndpoint",
    helpZCodeEndpointProduction: "titleBar.menu.help.zcodeEndpoint.production",
    helpZCodeEndpointTest: "titleBar.menu.help.zcodeEndpoint.test",
    helpZCodeEndpointCustom: "titleBar.menu.help.zcodeEndpoint.custom",
    helpZCodeEndpointReset: "titleBar.menu.help.zcodeEndpoint.reset",
    helpStartPerformanceRecording:
      "titleBar.menu.help.startPerformanceRecording",
    helpStopPerformanceRecording: "titleBar.menu.help.stopPerformanceRecording",
    helpFeedback: "titleBar.menu.help.feedback",
    helpExportLogs: "titleBar.menu.help.exportLogs",
    helpClearAllData: "titleBar.menu.help.clearAllData",
    helpCheckingForUpdates: "desktopMenu.help.checkingForUpdates",
    helpUpdateAvailableVersion: "desktopMenu.help.updateAvailableVersion",
    helpDownloadingUpdateVersion: "desktopMenu.help.downloadingUpdateVersion",
    helpDownloadingUpdateProgress: "desktopMenu.help.downloadingUpdateProgress",
    helpRestartToUpdate: "desktopMenu.help.restartToUpdate",
    dockShowCurrentWindow: "dock.menu.showCurrentWindow",
    trayTooltip: "tray.tooltip",
    trayOpenZCode: "tray.menu.openZCode",
    trayQuit: "tray.menu.quit",
  },
  Tu = {
    "zh-CN": {
      "titleBar.menu.file": "\u6587\u4EF6",
      "titleBar.menu.edit": "\u7F16\u8F91",
      "titleBar.menu.view": "\u89C6\u56FE",
      "titleBar.menu.window": "\u7A97\u53E3",
      "titleBar.menu.help": "\u5E2E\u52A9",
      "titleBar.menu.file.newTask": "\u65B0\u5EFA\u4EFB\u52A1",
      "titleBar.menu.file.openWorkspace": "\u6253\u5F00\u5DE5\u4F5C\u533A",
      "titleBar.menu.file.closeWindow": "\u5173\u95ED\u7A97\u53E3",
      "titleBar.menu.edit.undo": "\u64A4\u9500",
      "titleBar.menu.edit.redo": "\u91CD\u505A",
      "titleBar.menu.edit.cut": "\u526A\u5207",
      "titleBar.menu.edit.copy": "\u590D\u5236",
      "titleBar.menu.edit.paste": "\u7C98\u8D34",
      "titleBar.menu.edit.selectAll": "\u5168\u9009",
      "titleBar.menu.view.toggleFullScreen": "\u5207\u6362\u5168\u5C4F",
      "titleBar.menu.view.actualSize": "\u5B9E\u9645\u5927\u5C0F",
      "titleBar.menu.view.zoomIn": "\u653E\u5927",
      "titleBar.menu.view.zoomOut": "\u7F29\u5C0F",
      "titleBar.menu.window.minimize": "\u6700\u5C0F\u5316",
      "titleBar.menu.window.zoom": "\u7F29\u653E",
      "titleBar.menu.window.bringAllToFront":
        "\u5168\u90E8\u7F6E\u4E8E\u524D\u53F0",
      "titleBar.menu.app.services": "\u670D\u52A1",
      "titleBar.menu.app.hide": "\u9690\u85CF {appName}",
      "titleBar.menu.app.hideOthers": "\u9690\u85CF\u5176\u4ED6",
      "titleBar.menu.app.showAll": "\u5168\u90E8\u663E\u793A",
      "titleBar.menu.app.quit": "\u9000\u51FA {appName}",
      "titleBar.menu.help.about": "\u5173\u4E8E ZCode",
      "titleBar.menu.help.whatsNew": "\u66F4\u65B0\u65E5\u5FD7",
      "titleBar.menu.help.checkForUpdates": "\u68C0\u67E5\u66F4\u65B0",
      "titleBar.menu.help.toggleDevTools":
        "\u5207\u6362\u5F00\u53D1\u8005\u5DE5\u5177",
      "titleBar.menu.help.processMonitor": "\u8FDB\u7A0B\u76D1\u89C6\u5668",
      "titleBar.menu.help.toggleZCodeStdioTap":
        "\u6293\u53D6 Agent stdio \u901A\u4FE1",
      "titleBar.menu.help.zcodeEndpoint": "ZCode Endpoint",
      "titleBar.menu.help.zcodeEndpoint.production":
        "Production\uFF08\u9ED8\u8BA4\uFF09",
      "titleBar.menu.help.zcodeEndpoint.test": "Test",
      "titleBar.menu.help.zcodeEndpoint.custom": "\u81EA\u5B9A\u4E49...",
      "titleBar.menu.help.zcodeEndpoint.reset": "\u6062\u590D\u9ED8\u8BA4",
      "titleBar.menu.help.startPerformanceRecording":
        "\u5F00\u59CB\u6027\u80FD\u5F55\u5236",
      "titleBar.menu.help.stopPerformanceRecording":
        "\u505C\u6B62\u6027\u80FD\u5F55\u5236",
      "titleBar.menu.help.feedback": "\u95EE\u9898\u53CD\u9988",
      "titleBar.menu.help.exportLogs": "\u5BFC\u51FA\u65E5\u5FD7",
      "titleBar.menu.help.clearAllData": "\u6E05\u9664\u6240\u6709\u6570\u636E",
      "desktopMenu.help.checkingForUpdates":
        "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0...",
      "desktopMenu.help.updateAvailableVersion":
        "\u53D1\u73B0\u65B0\u7248\u672C {version}",
      "desktopMenu.help.downloadingUpdateVersion":
        "\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0 {version}...",
      "desktopMenu.help.downloadingUpdateProgress":
        "\u6B63\u5728\u4E0B\u8F7D\u66F4\u65B0... {progress}",
      "desktopMenu.help.restartToUpdate":
        "\u91CD\u542F\u4EE5\u66F4\u65B0\uFF08{version}\uFF09",
      "dock.menu.showCurrentWindow": "\u663E\u793A\u5F53\u524D\u7A97\u53E3",
      "tray.tooltip": "ZCode",
      "tray.menu.openZCode": "\u6253\u5F00 ZCode",
      "tray.menu.quit": "\u9000\u51FA",
    },
    "en-US": {
      "titleBar.menu.file": "File",
      "titleBar.menu.edit": "Edit",
      "titleBar.menu.view": "View",
      "titleBar.menu.window": "Window",
      "titleBar.menu.help": "Help",
      "titleBar.menu.file.newTask": "New task",
      "titleBar.menu.file.openWorkspace": "Open workspace",
      "titleBar.menu.file.closeWindow": "Close window",
      "titleBar.menu.edit.undo": "Undo",
      "titleBar.menu.edit.redo": "Redo",
      "titleBar.menu.edit.cut": "Cut",
      "titleBar.menu.edit.copy": "Copy",
      "titleBar.menu.edit.paste": "Paste",
      "titleBar.menu.edit.selectAll": "Select all",
      "titleBar.menu.view.toggleFullScreen": "Toggle full screen",
      "titleBar.menu.view.actualSize": "Actual size",
      "titleBar.menu.view.zoomIn": "Zoom in",
      "titleBar.menu.view.zoomOut": "Zoom out",
      "titleBar.menu.window.minimize": "Minimize",
      "titleBar.menu.window.zoom": "Zoom",
      "titleBar.menu.window.bringAllToFront": "Bring all to front",
      "titleBar.menu.app.services": "Services",
      "titleBar.menu.app.hide": "Hide {appName}",
      "titleBar.menu.app.hideOthers": "Hide others",
      "titleBar.menu.app.showAll": "Show all",
      "titleBar.menu.app.quit": "Quit {appName}",
      "titleBar.menu.help.about": "About ZCode",
      "titleBar.menu.help.whatsNew": "What's new",
      "titleBar.menu.help.checkForUpdates": "Check for updates",
      "titleBar.menu.help.toggleDevTools": "Toggle developer tools",
      "titleBar.menu.help.processMonitor": "Process monitor",
      "titleBar.menu.help.toggleZCodeStdioTap": "Capture agent stdio traffic",
      "titleBar.menu.help.zcodeEndpoint": "ZCode Endpoint",
      "titleBar.menu.help.zcodeEndpoint.production": "Production (default)",
      "titleBar.menu.help.zcodeEndpoint.test": "Test",
      "titleBar.menu.help.zcodeEndpoint.custom": "Custom...",
      "titleBar.menu.help.zcodeEndpoint.reset": "Reset to default",
      "titleBar.menu.help.startPerformanceRecording":
        "Start performance recording",
      "titleBar.menu.help.stopPerformanceRecording":
        "Stop performance recording",
      "titleBar.menu.help.feedback": "Feedback",
      "titleBar.menu.help.exportLogs": "Export logs",
      "titleBar.menu.help.clearAllData": "Clear all data",
      "desktopMenu.help.checkingForUpdates": "Checking for updates...",
      "desktopMenu.help.updateAvailableVersion": "Update available {version}",
      "desktopMenu.help.downloadingUpdateVersion":
        "Downloading update {version}...",
      "desktopMenu.help.downloadingUpdateProgress":
        "Downloading update... {progress}",
      "desktopMenu.help.restartToUpdate": "Restart to update ({version})",
      "dock.menu.showCurrentWindow": "Show current window",
      "tray.tooltip": "ZCode",
      "tray.menu.openZCode": "Open ZCode",
      "tray.menu.quit": "Quit",
    },
  };
function xh(e, o) {
  return (Tu[e] ?? Tu[Ar])[o];
}
c(xh, "getDesktopMenuMessage");
function kC(e, o, r) {
  let a = xh(e, o);
  if (!r) return a;
  for (let [n, i] of Object.entries(r)) a = a.replaceAll(`{${n}}`, String(i));
  return a;
}
c(kC, "formatDesktopMenuMessage");
function TC(e) {
  return e.VITE_ZCODE_E2E_STORE_BRIDGE === "1" && !!e.ZCODE_E2E_RUN_ID?.trim();
}
c(TC, "shouldEnableE2ETestBridge");
function kh(e) {
  if (e.kind === "ssh") {
    let { password: o, privateKeyPassphrase: r, ...a } = e;
    return a;
  }
  if (e.kind === "server") {
    let { token: o, ...r } = e;
    return r;
  }
  return e;
}
c(kh, "stripRemoteTargetSecrets");
function Ih(e) {
  let o = e.match(/^([A-Z]:)\/(.*)$/);
  if (o)
    return { prefix: `${o[1]}/`, body: o[2] ?? "", blocksParentTraversal: !0 };
  if (e.startsWith("//")) {
    let a = e.slice(2).split("/").filter(Boolean);
    if (a.length >= 2) {
      let [n, i, ...s] = a;
      return {
        prefix: `//${n}/${i}/`,
        body: s.join("/"),
        blocksParentTraversal: !0,
      };
    }
    return { prefix: "//", body: a.join("/"), blocksParentTraversal: !0 };
  }
  if (e.startsWith("/"))
    return {
      prefix: "/",
      body: e.replace(/^\/+/, ""),
      blocksParentTraversal: !0,
    };
  if (e.startsWith("~/"))
    return { prefix: "~/", body: e.slice(2), blocksParentTraversal: !1 };
  let r = e.match(/^([A-Z]:)(.*)$/);
  return r
    ? { prefix: r[1] ?? "", body: r[2] ?? "", blocksParentTraversal: !1 }
    : { prefix: "", body: e, blocksParentTraversal: !1 };
}
c(Ih, "splitPrivateKeyPathRoot");
function Ch(e) {
  let o = e?.trim();
  if (!o) return "";
  let a = o
      .replace(/\\/g, "/")
      .replace(/^([a-z]):/i, (s, l) => `${l.toUpperCase()}:`),
    n = Ih(a),
    i = [];
  for (let s of n.body.split("/"))
    if (!(!s || s === ".")) {
      if (s === "..") {
        if (i.length > 0 && i.at(-1) !== "..") {
          i.pop();
          continue;
        }
        if (n.blocksParentTraversal) continue;
        i.push(s);
        continue;
      }
      i.push(s);
    }
  return `${n.prefix}${i.join("/")}` || n.prefix;
}
c(Ch, "normalizePrivateKeyPath");
function Rh(e) {
  return e.privateKeyPath?.trim()
    ? "private-key"
    : ("password" in e && typeof e.password == "string") ||
        ("passwordCredentialKey" in e && e.passwordCredentialKey?.trim())
      ? "password"
      : "agent";
}
c(Rh, "resolveSshAuthKind");
function Ph(e) {
  return JSON.stringify([
    "ssh:v1",
    e.host.trim().toLowerCase(),
    e.port ?? 22,
    e.username.trim(),
    Rh(e),
    Ch(e.privateKeyPath),
  ]);
}
c(Ph, "buildSshRemoteHostKey");
function $r(e) {
  return typeof e == "object" && e !== null;
}
c($r, "isRecord");
function wu(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "bigint")
    return String(e);
}
c(wu, "normalizeErrorCode");
function Th(e) {
  return !$r(e) || !("error" in e) || !$r(e.error)
    ? e
    : "message" in e.error || "code" in e.error
      ? e.error
      : e;
}
c(Th, "getErrorCandidate");
var BC = "ZCODE_FILE_LOCK_TIMEOUT";
function $n(e) {
  if (typeof e == "string") return e;
  if (e === null) return "null";
  if (e === void 0) return "undefined";
  if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint")
    return String(e);
  try {
    let o = JSON.stringify(e);
    if (o !== void 0) return o;
  } catch {}
  return String(e);
}
c($n, "stringifyUnknownValue");
function wh(e) {
  let o = Th(e);
  if (o instanceof Error) {
    let r = o;
    return { message: o.message || o.name || String(o), code: wu(r.code) };
  }
  if ($r(o)) {
    let r = "code" in o ? wu(o.code) : void 0,
      a = "message" in o ? $n(o.message) : $n(o);
    return { message: a !== "undefined" && a.length > 0 ? a : $n(o), code: r };
  }
  return { message: $n(o) };
}
c(wh, "normalizeUnknownError");
var t = {};
ke(t, {
  $brand: () => Dn,
  $input: () => Gs,
  $output: () => Vs,
  NEVER: () => Dr,
  TimePrecision: () => Ys,
  ZodAny: () => jl,
  ZodArray: () => Fl,
  ZodBase64: () => sr,
  ZodBase64URL: () => cr,
  ZodBigInt: () => At,
  ZodBigIntFormat: () => ur,
  ZodBoolean: () => Ot,
  ZodCIDRv4: () => ir,
  ZodCIDRv6: () => ar,
  ZodCUID: () => Xo,
  ZodCUID2: () => Qo,
  ZodCatch: () => pd,
  ZodCodec: () => vr,
  ZodCustom: () => Cn,
  ZodCustomStringFormat: () => wt,
  ZodDate: () => Sn,
  ZodDefault: () => ad,
  ZodDiscriminatedUnion: () => Vl,
  ZodE164: () => lr,
  ZodEmail: () => Ho,
  ZodEmoji: () => Jo,
  ZodEnum: () => Pt,
  ZodError: () => ov,
  ZodExactOptional: () => od,
  ZodFile: () => td,
  ZodFirstPartyTypeKind: () => Id,
  ZodFunction: () => _d,
  ZodGUID: () => fn,
  ZodIPv4: () => or,
  ZodIPv6: () => rr,
  ZodISODate: () => Wo,
  ZodISODateTime: () => Lo,
  ZodISODuration: () => qo,
  ZodISOTime: () => Fo,
  ZodIntersection: () => Gl,
  ZodIssueCode: () => iv,
  ZodJWT: () => dr,
  ZodKSUID: () => nr,
  ZodLazy: () => bd,
  ZodLiteral: () => ed,
  ZodMAC: () => zl,
  ZodMap: () => Xl,
  ZodNaN: () => gd,
  ZodNanoID: () => Yo,
  ZodNever: () => Ll,
  ZodNonOptional: () => yr,
  ZodNull: () => Nl,
  ZodNullable: () => id,
  ZodNumber: () => Et,
  ZodNumberFormat: () => Ye,
  ZodObject: () => xn,
  ZodOptional: () => hr,
  ZodPipe: () => br,
  ZodPrefault: () => cd,
  ZodPromise: () => Sd,
  ZodReadonly: () => fd,
  ZodRealError: () => ee,
  ZodRecord: () => In,
  ZodSet: () => Ql,
  ZodString: () => Tt,
  ZodStringFormat: () => N,
  ZodSuccess: () => ud,
  ZodSymbol: () => Dl,
  ZodTemplateLiteral: () => yd,
  ZodTransform: () => nd,
  ZodTuple: () => Hl,
  ZodType: () => E,
  ZodULID: () => er,
  ZodURL: () => vn,
  ZodUUID: () => Se,
  ZodUndefined: () => Ul,
  ZodUnion: () => kn,
  ZodUnknown: () => Bl,
  ZodVoid: () => Wl,
  ZodXID: () => tr,
  ZodXor: () => ql,
  _ZodString: () => Ko,
  _default: () => sd,
  _function: () => hm,
  any: () => Kp,
  array: () => _n,
  base64: () => Op,
  base64url: () => Ap,
  bigint: () => Wp,
  boolean: () => $l,
  catch: () => md,
  check: () => ym,
  cidrv4: () => wp,
  cidrv6: () => Ep,
  clone: () => G,
  codec: () => mm,
  coerce: () => Cd,
  config: () => B,
  core: () => Re,
  cuid: () => _p,
  cuid2: () => xp,
  custom: () => bm,
  date: () => Jp,
  decode: () => Rl,
  decodeAsync: () => Tl,
  describe: () => vm,
  discriminatedUnion: () => nm,
  e164: () => zp,
  email: () => up,
  emoji: () => vp,
  encode: () => Cl,
  encodeAsync: () => Pl,
  endsWith: () => yt,
  enum: () => gr,
  exactOptional: () => rd,
  file: () => lm,
  flattenError: () => Xt,
  float32: () => Zp,
  float64: () => jp,
  formatError: () => Qt,
  fromJSONSchema: () => Rm,
  function: () => hm,
  getErrorMap: () => sv,
  globalRegistry: () => q,
  gt: () => be,
  gte: () => K,
  guid: () => pp,
  hash: () => Np,
  hex: () => Up,
  hostname: () => Dp,
  httpUrl: () => bp,
  includes: () => ft,
  instanceof: () => _m,
  int: () => Go,
  int32: () => Bp,
  int64: () => Fp,
  intersection: () => Kl,
  ipv4: () => Rp,
  ipv6: () => Tp,
  iso: () => Rt,
  json: () => km,
  jwt: () => Mp,
  keyof: () => Yp,
  ksuid: () => Cp,
  lazy: () => vd,
  length: () => He,
  literal: () => cm,
  locales: () => un,
  looseObject: () => em,
  looseRecord: () => rm,
  lowercase: () => mt,
  lt: () => ye,
  lte: () => oe,
  mac: () => Pp,
  map: () => im,
  maxLength: () => Ke,
  maxSize: () => Ue,
  meta: () => Sm,
  mime: () => bt,
  minLength: () => Ce,
  minSize: () => ve,
  multipleOf: () => De,
  nan: () => pm,
  nanoid: () => Sp,
  nativeEnum: () => sm,
  negative: () => Ao,
  never: () => pr,
  nonnegative: () => Mo,
  nonoptional: () => dd,
  nonpositive: () => zo,
  normalize: () => vt,
  null: () => Zl,
  nullable: () => yn,
  nullish: () => dm,
  number: () => Ml,
  object: () => Xp,
  optional: () => hn,
  overwrite: () => me,
  parse: () => _l,
  parseAsync: () => xl,
  partialRecord: () => om,
  pipe: () => bn,
  positive: () => Oo,
  prefault: () => ld,
  preprocess: () => Im,
  prettifyError: () => Kr,
  promise: () => fm,
  property: () => $o,
  readonly: () => hd,
  record: () => Yl,
  refine: () => xd,
  regex: () => pt,
  regexes: () => de,
  registry: () => lo,
  safeDecode: () => El,
  safeDecodeAsync: () => Al,
  safeEncode: () => wl,
  safeEncodeAsync: () => Ol,
  safeParse: () => kl,
  safeParseAsync: () => Il,
  set: () => am,
  setErrorMap: () => av,
  size: () => Ge,
  slugify: () => kt,
  startsWith: () => ht,
  strictObject: () => Qp,
  string: () => Vo,
  stringFormat: () => $p,
  stringbool: () => xm,
  success: () => um,
  superRefine: () => kd,
  symbol: () => Vp,
  templateLiteral: () => gm,
  toJSONSchema: () => Zo,
  toLowerCase: () => _t,
  toUpperCase: () => xt,
  transform: () => fr,
  treeifyError: () => Gr,
  trim: () => St,
  tuple: () => Jl,
  uint32: () => Lp,
  uint64: () => qp,
  ulid: () => kp,
  undefined: () => Gp,
  union: () => mr,
  unknown: () => Je,
  uppercase: () => gt,
  url: () => yp,
  util: () => I,
  uuid: () => mp,
  uuidv4: () => gp,
  uuidv6: () => fp,
  uuidv7: () => hp,
  void: () => Hp,
  xid: () => Ip,
  xor: () => tm,
});
var Re = {};
ke(Re, {
  $ZodAny: () => xa,
  $ZodArray: () => Pa,
  $ZodAsyncError: () => pe,
  $ZodBase64: () => pa,
  $ZodBase64URL: () => ma,
  $ZodBigInt: () => io,
  $ZodBigIntFormat: () => ba,
  $ZodBoolean: () => on,
  $ZodCIDRv4: () => la,
  $ZodCIDRv6: () => da,
  $ZodCUID: () => Yi,
  $ZodCUID2: () => Xi,
  $ZodCatch: () => qa,
  $ZodCheck: () => Z,
  $ZodCheckBigIntFormat: () => Pi,
  $ZodCheckEndsWith: () => Zi,
  $ZodCheckGreaterThan: () => Xn,
  $ZodCheckIncludes: () => Ui,
  $ZodCheckLengthEquals: () => zi,
  $ZodCheckLessThan: () => Yn,
  $ZodCheckLowerCase: () => $i,
  $ZodCheckMaxLength: () => Oi,
  $ZodCheckMaxSize: () => Ti,
  $ZodCheckMimeType: () => Bi,
  $ZodCheckMinLength: () => Ai,
  $ZodCheckMinSize: () => wi,
  $ZodCheckMultipleOf: () => Ci,
  $ZodCheckNumberFormat: () => Ri,
  $ZodCheckOverwrite: () => Li,
  $ZodCheckProperty: () => ji,
  $ZodCheckRegex: () => Mi,
  $ZodCheckSizeEquals: () => Ei,
  $ZodCheckStartsWith: () => Ni,
  $ZodCheckStringFormat: () => dt,
  $ZodCheckUpperCase: () => Di,
  $ZodCodec: () => an,
  $ZodCustom: () => Qa,
  $ZodCustomStringFormat: () => ha,
  $ZodDate: () => Ra,
  $ZodDefault: () => Ba,
  $ZodDiscriminatedUnion: () => Ea,
  $ZodE164: () => ga,
  $ZodEmail: () => Gi,
  $ZodEmoji: () => Hi,
  $ZodEncodeError: () => Oe,
  $ZodEnum: () => $a,
  $ZodError: () => Yt,
  $ZodExactOptional: () => Za,
  $ZodFile: () => Ua,
  $ZodFunction: () => Ja,
  $ZodGUID: () => qi,
  $ZodIPv4: () => aa,
  $ZodIPv6: () => sa,
  $ZodISODate: () => oa,
  $ZodISODateTime: () => na,
  $ZodISODuration: () => ia,
  $ZodISOTime: () => ra,
  $ZodIntersection: () => Oa,
  $ZodJWT: () => fa,
  $ZodKSUID: () => ta,
  $ZodLazy: () => Xa,
  $ZodLiteral: () => Da,
  $ZodMAC: () => ca,
  $ZodMap: () => za,
  $ZodNaN: () => Va,
  $ZodNanoID: () => Ji,
  $ZodNever: () => Ia,
  $ZodNonOptional: () => Wa,
  $ZodNull: () => _a,
  $ZodNullable: () => ja,
  $ZodNumber: () => ro,
  $ZodNumberFormat: () => ya,
  $ZodObject: () => np,
  $ZodObjectJIT: () => Ta,
  $ZodOptional: () => so,
  $ZodPipe: () => Ga,
  $ZodPrefault: () => La,
  $ZodPromise: () => Ya,
  $ZodReadonly: () => Ka,
  $ZodRealError: () => Q,
  $ZodRecord: () => Aa,
  $ZodRegistry: () => co,
  $ZodSet: () => Ma,
  $ZodString: () => Ve,
  $ZodStringFormat: () => U,
  $ZodSuccess: () => Fa,
  $ZodSymbol: () => va,
  $ZodTemplateLiteral: () => Ha,
  $ZodTransform: () => Na,
  $ZodTuple: () => ao,
  $ZodType: () => w,
  $ZodULID: () => Qi,
  $ZodURL: () => Ki,
  $ZodUUID: () => Vi,
  $ZodUndefined: () => Sa,
  $ZodUnion: () => rn,
  $ZodUnknown: () => ka,
  $ZodVoid: () => Ca,
  $ZodXID: () => ea,
  $ZodXor: () => wa,
  $brand: () => Dn,
  $constructor: () => f,
  $input: () => Gs,
  $output: () => Vs,
  Doc: () => nn,
  JSONSchema: () => lp,
  JSONSchemaGenerator: () => jo,
  NEVER: () => Dr,
  TimePrecision: () => Ys,
  _any: () => bc,
  _array: () => Cc,
  _base64: () => Po,
  _base64url: () => To,
  _bigint: () => uc,
  _boolean: () => lc,
  _catch: () => Hb,
  _check: () => cp,
  _cidrv4: () => Co,
  _cidrv6: () => Ro,
  _coercedBigint: () => pc,
  _coercedBoolean: () => dc,
  _coercedDate: () => kc,
  _coercedNumber: () => oc,
  _coercedString: () => Hs,
  _cuid: () => bo,
  _cuid2: () => vo,
  _custom: () => Pc,
  _date: () => xc,
  _decode: () => Ln,
  _decodeAsync: () => Fn,
  _default: () => Vb,
  _discriminatedUnion: () => Mb,
  _e164: () => wo,
  _email: () => uo,
  _emoji: () => ho,
  _encode: () => Bn,
  _encodeAsync: () => Wn,
  _endsWith: () => yt,
  _enum: () => jb,
  _file: () => Rc,
  _float32: () => ic,
  _float64: () => ac,
  _gt: () => be,
  _gte: () => K,
  _guid: () => pn,
  _includes: () => ft,
  _int: () => rc,
  _int32: () => sc,
  _int64: () => mc,
  _intersection: () => $b,
  _ipv4: () => ko,
  _ipv6: () => Io,
  _isoDate: () => Qs,
  _isoDateTime: () => Xs,
  _isoDuration: () => tc,
  _isoTime: () => ec,
  _jwt: () => Eo,
  _ksuid: () => xo,
  _lazy: () => Qb,
  _length: () => He,
  _literal: () => Lb,
  _lowercase: () => mt,
  _lt: () => ye,
  _lte: () => oe,
  _mac: () => Js,
  _map: () => Nb,
  _max: () => oe,
  _maxLength: () => Ke,
  _maxSize: () => Ue,
  _mime: () => bt,
  _min: () => K,
  _minLength: () => Ce,
  _minSize: () => ve,
  _multipleOf: () => De,
  _nan: () => Ic,
  _nanoid: () => yo,
  _nativeEnum: () => Bb,
  _negative: () => Ao,
  _never: () => Sc,
  _nonnegative: () => Mo,
  _nonoptional: () => Gb,
  _nonpositive: () => zo,
  _normalize: () => vt,
  _null: () => yc,
  _nullable: () => qb,
  _number: () => nc,
  _optional: () => Fb,
  _overwrite: () => me,
  _parse: () => at,
  _parseAsync: () => st,
  _pipe: () => Jb,
  _positive: () => Oo,
  _promise: () => ev,
  _property: () => $o,
  _readonly: () => Yb,
  _record: () => Ub,
  _refine: () => Tc,
  _regex: () => pt,
  _safeDecode: () => Vn,
  _safeDecodeAsync: () => Kn,
  _safeEncode: () => qn,
  _safeEncodeAsync: () => Gn,
  _safeParse: () => ct,
  _safeParseAsync: () => lt,
  _set: () => Zb,
  _size: () => Ge,
  _slugify: () => kt,
  _startsWith: () => ht,
  _string: () => Ks,
  _stringFormat: () => It,
  _stringbool: () => Ac,
  _success: () => Kb,
  _superRefine: () => wc,
  _symbol: () => fc,
  _templateLiteral: () => Xb,
  _toLowerCase: () => _t,
  _toUpperCase: () => xt,
  _transform: () => Wb,
  _trim: () => St,
  _tuple: () => Db,
  _uint32: () => cc,
  _uint64: () => gc,
  _ulid: () => So,
  _undefined: () => hc,
  _union: () => Ab,
  _unknown: () => vc,
  _uppercase: () => gt,
  _url: () => mn,
  _uuid: () => po,
  _uuidv4: () => mo,
  _uuidv6: () => go,
  _uuidv7: () => fo,
  _void: () => _c,
  _xid: () => _o,
  _xor: () => zb,
  clone: () => G,
  config: () => B,
  createStandardJSONSchemaMethod: () => Ct,
  createToJSONSchemaMethod: () => zc,
  decode: () => oy,
  decodeAsync: () => iy,
  describe: () => Ec,
  encode: () => ny,
  encodeAsync: () => ry,
  extractDefs: () => Ze,
  finalize: () => je,
  flattenError: () => Xt,
  formatError: () => Qt,
  globalConfig: () => Ft,
  globalRegistry: () => q,
  initializeContext: () => Ne,
  isValidBase64: () => ua,
  isValidBase64URL: () => Xu,
  isValidJWT: () => Qu,
  locales: () => un,
  meta: () => Oc,
  parse: () => Zn,
  parseAsync: () => jn,
  prettifyError: () => Kr,
  process: () => D,
  regexes: () => de,
  registry: () => lo,
  safeDecode: () => sy,
  safeDecodeAsync: () => ly,
  safeEncode: () => ay,
  safeEncodeAsync: () => cy,
  safeParse: () => Hr,
  safeParseAsync: () => Jr,
  toDotPath: () => Mu,
  toJSONSchema: () => Zo,
  treeifyError: () => Gr,
  util: () => I,
  version: () => Wi,
});
var Dr = Object.freeze({ status: "aborted" });
function f(e, o, r) {
  function a(l, p) {
    if (
      (l._zod ||
        Object.defineProperty(l, "_zod", {
          value: { def: p, constr: s, traits: new Set() },
          enumerable: !1,
        }),
      l._zod.traits.has(e))
    )
      return;
    (l._zod.traits.add(e), o(l, p));
    let u = s.prototype,
      h = Object.keys(u);
    for (let b = 0; b < h.length; b++) {
      let S = h[b];
      S in l || (l[S] = u[S].bind(l));
    }
  }
  c(a, "init");
  let n = r?.Parent ?? Object;
  class i extends n {
    static {
      c(this, "Definition");
    }
  }
  Object.defineProperty(i, "name", { value: e });
  function s(l) {
    var p;
    let u = r?.Parent ? new i() : this;
    (a(u, l), (p = u._zod).deferred ?? (p.deferred = []));
    for (let h of u._zod.deferred) h();
    return u;
  }
  return (
    c(s, "_"),
    Object.defineProperty(s, "init", { value: a }),
    Object.defineProperty(s, Symbol.hasInstance, {
      value: c(
        (l) =>
          r?.Parent && l instanceof r.Parent ? !0 : l?._zod?.traits?.has(e),
        "value",
      ),
    }),
    Object.defineProperty(s, "name", { value: e }),
    s
  );
}
c(f, "$constructor");
var Dn = Symbol("zod_brand"),
  pe = class extends Error {
    static {
      c(this, "$ZodAsyncError");
    }
    constructor() {
      super(
        "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
      );
    }
  },
  Oe = class extends Error {
    static {
      c(this, "$ZodEncodeError");
    }
    constructor(o) {
      (super(`Encountered unidirectional transform during encode: ${o}`),
        (this.name = "ZodEncodeError"));
    }
  },
  Ft = {};
function B(e) {
  return (e && Object.assign(Ft, e), Ft);
}
c(B, "config");
var I = {};
ke(I, {
  BIGINT_FORMAT_RANGES: () => Vr,
  Class: () => Nr,
  NUMBER_FORMAT_RANGES: () => qr,
  aborted: () => $e,
  allowsEval: () => Br,
  assert: () => Mh,
  assertEqual: () => Eh,
  assertIs: () => Ah,
  assertNever: () => zh,
  assertNotEqual: () => Oh,
  assignProp: () => ze,
  base64ToUint8Array: () => Ou,
  base64urlToUint8Array: () => Yh,
  cached: () => rt,
  captureStackTrace: () => Nn,
  cleanEnum: () => Jh,
  cleanRegex: () => Gt,
  clone: () => G,
  cloneDef: () => Dh,
  createTransparentProxy: () => Lh,
  defineLazy: () => O,
  esc: () => Un,
  escapeRegex: () => le,
  extend: () => qh,
  finalizeIssue: () => X,
  floatSafeRemainder: () => Zr,
  getElementAtPath: () => Uh,
  getEnumValues: () => Vt,
  getLengthableOrigin: () => Jt,
  getParsedType: () => Bh,
  getSizableOrigin: () => Ht,
  hexToUint8Array: () => Qh,
  isObject: () => Fe,
  isPlainObject: () => Me,
  issue: () => it,
  joinValues: () => v,
  jsonStringifyReplacer: () => ot,
  merge: () => Gh,
  mergeDefs: () => Ie,
  normalizeParams: () => C,
  nullish: () => Ae,
  numKeys: () => jh,
  objectClone: () => $h,
  omit: () => Fh,
  optionalKeys: () => Fr,
  parsedType: () => k,
  partial: () => Kh,
  pick: () => Wh,
  prefixIssues: () => ne,
  primitiveTypes: () => Wr,
  promiseAllObject: () => Nh,
  propertyKeyTypes: () => Kt,
  randomString: () => Zh,
  required: () => Hh,
  safeExtend: () => Vh,
  shallowClone: () => Lr,
  slugify: () => jr,
  stringifyPrimitive: () => x,
  uint8ArrayToBase64: () => Au,
  uint8ArrayToBase64url: () => Xh,
  uint8ArrayToHex: () => ey,
  unwrapMessage: () => qt,
});
function Eh(e) {
  return e;
}
c(Eh, "assertEqual");
function Oh(e) {
  return e;
}
c(Oh, "assertNotEqual");
function Ah(e) {}
c(Ah, "assertIs");
function zh(e) {
  throw new Error("Unexpected value in exhaustive check");
}
c(zh, "assertNever");
function Mh(e) {}
c(Mh, "assert");
function Vt(e) {
  let o = Object.values(e).filter((a) => typeof a == "number");
  return Object.entries(e)
    .filter(([a, n]) => o.indexOf(+a) === -1)
    .map(([a, n]) => n);
}
c(Vt, "getEnumValues");
function v(e, o = "|") {
  return e.map((r) => x(r)).join(o);
}
c(v, "joinValues");
function ot(e, o) {
  return typeof o == "bigint" ? o.toString() : o;
}
c(ot, "jsonStringifyReplacer");
function rt(e) {
  return {
    get value() {
      {
        let r = e();
        return (Object.defineProperty(this, "value", { value: r }), r);
      }
      throw new Error("cached value already set");
    },
  };
}
c(rt, "cached");
function Ae(e) {
  return e == null;
}
c(Ae, "nullish");
function Gt(e) {
  let o = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(o, r);
}
c(Gt, "cleanRegex");
function Zr(e, o) {
  let r = (e.toString().split(".")[1] || "").length,
    a = o.toString(),
    n = (a.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(a)) {
    let p = a.match(/\d?e-(\d?)/);
    p?.[1] && (n = Number.parseInt(p[1]));
  }
  let i = r > n ? r : n,
    s = Number.parseInt(e.toFixed(i).replace(".", "")),
    l = Number.parseInt(o.toFixed(i).replace(".", ""));
  return (s % l) / 10 ** i;
}
c(Zr, "floatSafeRemainder");
var Eu = Symbol("evaluating");
function O(e, o, r) {
  let a;
  Object.defineProperty(e, o, {
    get() {
      if (a !== Eu) return (a === void 0 && ((a = Eu), (a = r())), a);
    },
    set(n) {
      Object.defineProperty(e, o, { value: n });
    },
    configurable: !0,
  });
}
c(O, "defineLazy");
function $h(e) {
  return Object.create(
    Object.getPrototypeOf(e),
    Object.getOwnPropertyDescriptors(e),
  );
}
c($h, "objectClone");
function ze(e, o, r) {
  Object.defineProperty(e, o, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
c(ze, "assignProp");
function Ie(...e) {
  let o = {};
  for (let r of e) {
    let a = Object.getOwnPropertyDescriptors(r);
    Object.assign(o, a);
  }
  return Object.defineProperties({}, o);
}
c(Ie, "mergeDefs");
function Dh(e) {
  return Ie(e._zod.def);
}
c(Dh, "cloneDef");
function Uh(e, o) {
  return o ? o.reduce((r, a) => r?.[a], e) : e;
}
c(Uh, "getElementAtPath");
function Nh(e) {
  let o = Object.keys(e),
    r = o.map((a) => e[a]);
  return Promise.all(r).then((a) => {
    let n = {};
    for (let i = 0; i < o.length; i++) n[o[i]] = a[i];
    return n;
  });
}
c(Nh, "promiseAllObject");
function Zh(e = 10) {
  let o = "abcdefghijklmnopqrstuvwxyz",
    r = "";
  for (let a = 0; a < e; a++) r += o[Math.floor(Math.random() * o.length)];
  return r;
}
c(Zh, "randomString");
function Un(e) {
  return JSON.stringify(e);
}
c(Un, "esc");
function jr(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
c(jr, "slugify");
var Nn = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Fe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
c(Fe, "isObject");
var Br = rt(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Me(e) {
  if (Fe(e) === !1) return !1;
  let o = e.constructor;
  if (o === void 0 || typeof o != "function") return !0;
  let r = o.prototype;
  return !(
    Fe(r) === !1 ||
    Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
  );
}
c(Me, "isPlainObject");
function Lr(e) {
  return Me(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
c(Lr, "shallowClone");
function jh(e) {
  let o = 0;
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && o++;
  return o;
}
c(jh, "numKeys");
var Bh = c((e) => {
    let o = typeof e;
    switch (o) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        return Array.isArray(e)
          ? "array"
          : e === null
            ? "null"
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? "promise"
              : typeof Map < "u" && e instanceof Map
                ? "map"
                : typeof Set < "u" && e instanceof Set
                  ? "set"
                  : typeof Date < "u" && e instanceof Date
                    ? "date"
                    : typeof File < "u" && e instanceof File
                      ? "file"
                      : "object";
      default:
        throw new Error(`Unknown data type: ${o}`);
    }
  }, "getParsedType"),
  Kt = new Set(["string", "number", "symbol"]),
  Wr = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function le(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
c(le, "escapeRegex");
function G(e, o, r) {
  let a = new e._zod.constr(o ?? e._zod.def);
  return ((!o || r?.parent) && (a._zod.parent = e), a);
}
c(G, "clone");
function C(e) {
  let o = e;
  if (!o) return {};
  if (typeof o == "string") return { error: c(() => o, "error") };
  if (o?.message !== void 0) {
    if (o?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    o.error = o.message;
  }
  return (
    delete o.message,
    typeof o.error == "string" ? { ...o, error: c(() => o.error, "error") } : o
  );
}
c(C, "normalizeParams");
function Lh(e) {
  let o;
  return new Proxy(
    {},
    {
      get(r, a, n) {
        return (o ?? (o = e()), Reflect.get(o, a, n));
      },
      set(r, a, n, i) {
        return (o ?? (o = e()), Reflect.set(o, a, n, i));
      },
      has(r, a) {
        return (o ?? (o = e()), Reflect.has(o, a));
      },
      deleteProperty(r, a) {
        return (o ?? (o = e()), Reflect.deleteProperty(o, a));
      },
      ownKeys(r) {
        return (o ?? (o = e()), Reflect.ownKeys(o));
      },
      getOwnPropertyDescriptor(r, a) {
        return (o ?? (o = e()), Reflect.getOwnPropertyDescriptor(o, a));
      },
      defineProperty(r, a, n) {
        return (o ?? (o = e()), Reflect.defineProperty(o, a, n));
      },
    },
  );
}
c(Lh, "createTransparentProxy");
function x(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
c(x, "stringifyPrimitive");
function Fr(e) {
  return Object.keys(e).filter(
    (o) => e[o]._zod.optin === "optional" && e[o]._zod.optout === "optional",
  );
}
c(Fr, "optionalKeys");
var qr = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Vr = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function Wh(e, o) {
  let r = e._zod.def,
    a = r.checks;
  if (a && a.length > 0)
    throw new Error(
      ".pick() cannot be used on object schemas containing refinements",
    );
  let i = Ie(e._zod.def, {
    get shape() {
      let s = {};
      for (let l in o) {
        if (!(l in r.shape)) throw new Error(`Unrecognized key: "${l}"`);
        o[l] && (s[l] = r.shape[l]);
      }
      return (ze(this, "shape", s), s);
    },
    checks: [],
  });
  return G(e, i);
}
c(Wh, "pick");
function Fh(e, o) {
  let r = e._zod.def,
    a = r.checks;
  if (a && a.length > 0)
    throw new Error(
      ".omit() cannot be used on object schemas containing refinements",
    );
  let i = Ie(e._zod.def, {
    get shape() {
      let s = { ...e._zod.def.shape };
      for (let l in o) {
        if (!(l in r.shape)) throw new Error(`Unrecognized key: "${l}"`);
        o[l] && delete s[l];
      }
      return (ze(this, "shape", s), s);
    },
    checks: [],
  });
  return G(e, i);
}
c(Fh, "omit");
function qh(e, o) {
  if (!Me(o))
    throw new Error("Invalid input to extend: expected a plain object");
  let r = e._zod.def.checks;
  if (r && r.length > 0) {
    let i = e._zod.def.shape;
    for (let s in o)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  let n = Ie(e._zod.def, {
    get shape() {
      let i = { ...e._zod.def.shape, ...o };
      return (ze(this, "shape", i), i);
    },
  });
  return G(e, n);
}
c(qh, "extend");
function Vh(e, o) {
  if (!Me(o))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  let r = Ie(e._zod.def, {
    get shape() {
      let a = { ...e._zod.def.shape, ...o };
      return (ze(this, "shape", a), a);
    },
  });
  return G(e, r);
}
c(Vh, "safeExtend");
function Gh(e, o) {
  let r = Ie(e._zod.def, {
    get shape() {
      let a = { ...e._zod.def.shape, ...o._zod.def.shape };
      return (ze(this, "shape", a), a);
    },
    get catchall() {
      return o._zod.def.catchall;
    },
    checks: [],
  });
  return G(e, r);
}
c(Gh, "merge");
function Kh(e, o, r) {
  let n = o._zod.def.checks;
  if (n && n.length > 0)
    throw new Error(
      ".partial() cannot be used on object schemas containing refinements",
    );
  let s = Ie(o._zod.def, {
    get shape() {
      let l = o._zod.def.shape,
        p = { ...l };
      if (r)
        for (let u in r) {
          if (!(u in l)) throw new Error(`Unrecognized key: "${u}"`);
          r[u] &&
            (p[u] = e ? new e({ type: "optional", innerType: l[u] }) : l[u]);
        }
      else
        for (let u in l)
          p[u] = e ? new e({ type: "optional", innerType: l[u] }) : l[u];
      return (ze(this, "shape", p), p);
    },
    checks: [],
  });
  return G(o, s);
}
c(Kh, "partial");
function Hh(e, o, r) {
  let a = Ie(o._zod.def, {
    get shape() {
      let n = o._zod.def.shape,
        i = { ...n };
      if (r)
        for (let s in r) {
          if (!(s in i)) throw new Error(`Unrecognized key: "${s}"`);
          r[s] && (i[s] = new e({ type: "nonoptional", innerType: n[s] }));
        }
      else
        for (let s in n) i[s] = new e({ type: "nonoptional", innerType: n[s] });
      return (ze(this, "shape", i), i);
    },
  });
  return G(o, a);
}
c(Hh, "required");
function $e(e, o = 0) {
  if (e.aborted === !0) return !0;
  for (let r = o; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
c($e, "aborted");
function ne(e, o) {
  return o.map((r) => {
    var a;
    return ((a = r).path ?? (a.path = []), r.path.unshift(e), r);
  });
}
c(ne, "prefixIssues");
function qt(e) {
  return typeof e == "string" ? e : e?.message;
}
c(qt, "unwrapMessage");
function X(e, o, r) {
  let a = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let n =
      qt(e.inst?._zod.def?.error?.(e)) ??
      qt(o?.error?.(e)) ??
      qt(r.customError?.(e)) ??
      qt(r.localeError?.(e)) ??
      "Invalid input";
    a.message = n;
  }
  return (
    delete a.inst,
    delete a.continue,
    o?.reportInput || delete a.input,
    a
  );
}
c(X, "finalizeIssue");
function Ht(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
c(Ht, "getSizableOrigin");
function Jt(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
c(Jt, "getLengthableOrigin");
function k(e) {
  let o = typeof e;
  switch (o) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      let r = e;
      if (
        r &&
        Object.getPrototypeOf(r) !== Object.prototype &&
        "constructor" in r &&
        r.constructor
      )
        return r.constructor.name;
    }
  }
  return o;
}
c(k, "parsedType");
function it(...e) {
  let [o, r, a] = e;
  return typeof o == "string"
    ? { message: o, code: "custom", input: r, inst: a }
    : { ...o };
}
c(it, "issue");
function Jh(e) {
  return Object.entries(e)
    .filter(([o, r]) => Number.isNaN(Number.parseInt(o, 10)))
    .map((o) => o[1]);
}
c(Jh, "cleanEnum");
function Ou(e) {
  let o = atob(e),
    r = new Uint8Array(o.length);
  for (let a = 0; a < o.length; a++) r[a] = o.charCodeAt(a);
  return r;
}
c(Ou, "base64ToUint8Array");
function Au(e) {
  let o = "";
  for (let r = 0; r < e.length; r++) o += String.fromCharCode(e[r]);
  return btoa(o);
}
c(Au, "uint8ArrayToBase64");
function Yh(e) {
  let o = e.replace(/-/g, "+").replace(/_/g, "/"),
    r = "=".repeat((4 - (o.length % 4)) % 4);
  return Ou(o + r);
}
c(Yh, "base64urlToUint8Array");
function Xh(e) {
  return Au(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
c(Xh, "uint8ArrayToBase64url");
function Qh(e) {
  let o = e.replace(/^0x/, "");
  if (o.length % 2 !== 0) throw new Error("Invalid hex string length");
  let r = new Uint8Array(o.length / 2);
  for (let a = 0; a < o.length; a += 2)
    r[a / 2] = Number.parseInt(o.slice(a, a + 2), 16);
  return r;
}
c(Qh, "hexToUint8Array");
function ey(e) {
  return Array.from(e)
    .map((o) => o.toString(16).padStart(2, "0"))
    .join("");
}
c(ey, "uint8ArrayToHex");
var Nr = class {
  static {
    c(this, "Class");
  }
  constructor(...o) {}
};
var zu = c((e, o) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: o, enumerable: !1 }),
      (e.message = JSON.stringify(o, ot, 2)),
      Object.defineProperty(e, "toString", {
        value: c(() => e.message, "value"),
        enumerable: !1,
      }));
  }, "initializer"),
  Yt = f("$ZodError", zu),
  Q = f("$ZodError", zu, { Parent: Error });
function Xt(e, o = (r) => r.message) {
  let r = {},
    a = [];
  for (let n of e.issues)
    n.path.length > 0
      ? ((r[n.path[0]] = r[n.path[0]] || []), r[n.path[0]].push(o(n)))
      : a.push(o(n));
  return { formErrors: a, fieldErrors: r };
}
c(Xt, "flattenError");
function Qt(e, o = (r) => r.message) {
  let r = { _errors: [] },
    a = c((n) => {
      for (let i of n.issues)
        if (i.code === "invalid_union" && i.errors.length)
          i.errors.map((s) => a({ issues: s }));
        else if (i.code === "invalid_key") a({ issues: i.issues });
        else if (i.code === "invalid_element") a({ issues: i.issues });
        else if (i.path.length === 0) r._errors.push(o(i));
        else {
          let s = r,
            l = 0;
          for (; l < i.path.length; ) {
            let p = i.path[l];
            (l === i.path.length - 1
              ? ((s[p] = s[p] || { _errors: [] }), s[p]._errors.push(o(i)))
              : (s[p] = s[p] || { _errors: [] }),
              (s = s[p]),
              l++);
          }
        }
    }, "processError");
  return (a(e), r);
}
c(Qt, "formatError");
function Gr(e, o = (r) => r.message) {
  let r = { errors: [] },
    a = c((n, i = []) => {
      var s, l;
      for (let p of n.issues)
        if (p.code === "invalid_union" && p.errors.length)
          p.errors.map((u) => a({ issues: u }, p.path));
        else if (p.code === "invalid_key") a({ issues: p.issues }, p.path);
        else if (p.code === "invalid_element") a({ issues: p.issues }, p.path);
        else {
          let u = [...i, ...p.path];
          if (u.length === 0) {
            r.errors.push(o(p));
            continue;
          }
          let h = r,
            b = 0;
          for (; b < u.length; ) {
            let S = u[b],
              _ = b === u.length - 1;
            (typeof S == "string"
              ? (h.properties ?? (h.properties = {}),
                (s = h.properties)[S] ?? (s[S] = { errors: [] }),
                (h = h.properties[S]))
              : (h.items ?? (h.items = []),
                (l = h.items)[S] ?? (l[S] = { errors: [] }),
                (h = h.items[S])),
              _ && h.errors.push(o(p)),
              b++);
          }
        }
    }, "processError");
  return (a(e), r);
}
c(Gr, "treeifyError");
function Mu(e) {
  let o = [],
    r = e.map((a) => (typeof a == "object" ? a.key : a));
  for (let a of r)
    typeof a == "number"
      ? o.push(`[${a}]`)
      : typeof a == "symbol"
        ? o.push(`[${JSON.stringify(String(a))}]`)
        : /[^\w$]/.test(a)
          ? o.push(`[${JSON.stringify(a)}]`)
          : (o.length && o.push("."), o.push(a));
  return o.join("");
}
c(Mu, "toDotPath");
function Kr(e) {
  let o = [],
    r = [...e.issues].sort(
      (a, n) => (a.path ?? []).length - (n.path ?? []).length,
    );
  for (let a of r)
    (o.push(`\u2716 ${a.message}`),
      a.path?.length && o.push(`  \u2192 at ${Mu(a.path)}`));
  return o.join(`
`);
}
c(Kr, "prettifyError");
var at = c(
    (e) => (o, r, a, n) => {
      let i = a ? Object.assign(a, { async: !1 }) : { async: !1 },
        s = o._zod.run({ value: r, issues: [] }, i);
      if (s instanceof Promise) throw new pe();
      if (s.issues.length) {
        let l = new (n?.Err ?? e)(s.issues.map((p) => X(p, i, B())));
        throw (Nn(l, n?.callee), l);
      }
      return s.value;
    },
    "_parse",
  ),
  Zn = at(Q),
  st = c(
    (e) => async (o, r, a, n) => {
      let i = a ? Object.assign(a, { async: !0 }) : { async: !0 },
        s = o._zod.run({ value: r, issues: [] }, i);
      if ((s instanceof Promise && (s = await s), s.issues.length)) {
        let l = new (n?.Err ?? e)(s.issues.map((p) => X(p, i, B())));
        throw (Nn(l, n?.callee), l);
      }
      return s.value;
    },
    "_parseAsync",
  ),
  jn = st(Q),
  ct = c(
    (e) => (o, r, a) => {
      let n = a ? { ...a, async: !1 } : { async: !1 },
        i = o._zod.run({ value: r, issues: [] }, n);
      if (i instanceof Promise) throw new pe();
      return i.issues.length
        ? {
            success: !1,
            error: new (e ?? Yt)(i.issues.map((s) => X(s, n, B()))),
          }
        : { success: !0, data: i.value };
    },
    "_safeParse",
  ),
  Hr = ct(Q),
  lt = c(
    (e) => async (o, r, a) => {
      let n = a ? Object.assign(a, { async: !0 }) : { async: !0 },
        i = o._zod.run({ value: r, issues: [] }, n);
      return (
        i instanceof Promise && (i = await i),
        i.issues.length
          ? { success: !1, error: new e(i.issues.map((s) => X(s, n, B()))) }
          : { success: !0, data: i.value }
      );
    },
    "_safeParseAsync",
  ),
  Jr = lt(Q),
  Bn = c(
    (e) => (o, r, a) => {
      let n = a
        ? Object.assign(a, { direction: "backward" })
        : { direction: "backward" };
      return at(e)(o, r, n);
    },
    "_encode",
  ),
  ny = Bn(Q),
  Ln = c((e) => (o, r, a) => at(e)(o, r, a), "_decode"),
  oy = Ln(Q),
  Wn = c(
    (e) => async (o, r, a) => {
      let n = a
        ? Object.assign(a, { direction: "backward" })
        : { direction: "backward" };
      return st(e)(o, r, n);
    },
    "_encodeAsync",
  ),
  ry = Wn(Q),
  Fn = c((e) => async (o, r, a) => st(e)(o, r, a), "_decodeAsync"),
  iy = Fn(Q),
  qn = c(
    (e) => (o, r, a) => {
      let n = a
        ? Object.assign(a, { direction: "backward" })
        : { direction: "backward" };
      return ct(e)(o, r, n);
    },
    "_safeEncode",
  ),
  ay = qn(Q),
  Vn = c((e) => (o, r, a) => ct(e)(o, r, a), "_safeDecode"),
  sy = Vn(Q),
  Gn = c(
    (e) => async (o, r, a) => {
      let n = a
        ? Object.assign(a, { direction: "backward" })
        : { direction: "backward" };
      return lt(e)(o, r, n);
    },
    "_safeEncodeAsync",
  ),
  cy = Gn(Q),
  Kn = c((e) => async (o, r, a) => lt(e)(o, r, a), "_safeDecodeAsync"),
  ly = Kn(Q);
var de = {};
ke(de, {
  base64: () => pi,
  base64url: () => Hn,
  bigint: () => bi,
  boolean: () => Si,
  browserEmail: () => yy,
  cidrv4: () => di,
  cidrv6: () => ui,
  cuid: () => Yr,
  cuid2: () => Xr,
  date: () => gi,
  datetime: () => hi,
  domain: () => Sy,
  duration: () => oi,
  e164: () => mi,
  email: () => ii,
  emoji: () => ai,
  extendedDuration: () => dy,
  guid: () => ri,
  hex: () => _y,
  hostname: () => vy,
  html5Email: () => gy,
  idnEmail: () => hy,
  integer: () => vi,
  ipv4: () => si,
  ipv6: () => ci,
  ksuid: () => ti,
  lowercase: () => ki,
  mac: () => li,
  md5_base64: () => ky,
  md5_base64url: () => Iy,
  md5_hex: () => xy,
  nanoid: () => ni,
  null: () => _i,
  number: () => Jn,
  rfc5322Email: () => fy,
  sha1_base64: () => Ry,
  sha1_base64url: () => Py,
  sha1_hex: () => Cy,
  sha256_base64: () => wy,
  sha256_base64url: () => Ey,
  sha256_hex: () => Ty,
  sha384_base64: () => Ay,
  sha384_base64url: () => zy,
  sha384_hex: () => Oy,
  sha512_base64: () => $y,
  sha512_base64url: () => Dy,
  sha512_hex: () => My,
  string: () => yi,
  time: () => fi,
  ulid: () => Qr,
  undefined: () => xi,
  unicodeEmail: () => $u,
  uppercase: () => Ii,
  uuid: () => qe,
  uuid4: () => uy,
  uuid6: () => py,
  uuid7: () => my,
  xid: () => ei,
});
var Yr = /^[cC][^\s-]{8,}$/,
  Xr = /^[0-9a-z]+$/,
  Qr = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  ei = /^[0-9a-vA-V]{20}$/,
  ti = /^[A-Za-z0-9]{27}$/,
  ni = /^[a-zA-Z0-9_-]{21}$/,
  oi =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  dy =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  ri =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  qe = c(
    (e) =>
      e
        ? new RegExp(
            `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
          )
        : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    "uuid",
  ),
  uy = qe(4),
  py = qe(6),
  my = qe(7),
  ii =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  gy =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  fy =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  $u = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  hy = $u,
  yy =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  by = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ai() {
  return new RegExp(by, "u");
}
c(ai, "emoji");
var si =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ci =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
  li = c((e) => {
    let o = le(e ?? ":");
    return new RegExp(
      `^(?:[0-9A-F]{2}${o}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${o}){5}[0-9a-f]{2}$`,
    );
  }, "mac"),
  di =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  ui =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  pi =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Hn = /^[A-Za-z0-9_-]*$/,
  vy =
    /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
  Sy = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  mi = /^\+[1-9]\d{6,14}$/,
  Du =
    "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  gi = new RegExp(`^${Du}$`);
function Uu(e) {
  let o = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number"
    ? e.precision === -1
      ? `${o}`
      : e.precision === 0
        ? `${o}:[0-5]\\d`
        : `${o}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${o}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
c(Uu, "timeSource");
function fi(e) {
  return new RegExp(`^${Uu(e)}$`);
}
c(fi, "time");
function hi(e) {
  let o = Uu({ precision: e.precision }),
    r = ["Z"];
  (e.local && r.push(""),
    e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"));
  let a = `${o}(?:${r.join("|")})`;
  return new RegExp(`^${Du}T(?:${a})$`);
}
c(hi, "datetime");
var yi = c((e) => {
    let o = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${o}$`);
  }, "string"),
  bi = /^-?\d+n?$/,
  vi = /^-?\d+$/,
  Jn = /^-?\d+(?:\.\d+)?$/,
  Si = /^(?:true|false)$/i,
  _i = /^null$/i;
var xi = /^undefined$/i;
var ki = /^[^A-Z]*$/,
  Ii = /^[^a-z]*$/,
  _y = /^[0-9a-fA-F]*$/;
function en(e, o) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${o}$`);
}
c(en, "fixedBase64");
function tn(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
c(tn, "fixedBase64url");
var xy = /^[0-9a-fA-F]{32}$/,
  ky = en(22, "=="),
  Iy = tn(22),
  Cy = /^[0-9a-fA-F]{40}$/,
  Ry = en(27, "="),
  Py = tn(27),
  Ty = /^[0-9a-fA-F]{64}$/,
  wy = en(43, "="),
  Ey = tn(43),
  Oy = /^[0-9a-fA-F]{96}$/,
  Ay = en(64, ""),
  zy = tn(64),
  My = /^[0-9a-fA-F]{128}$/,
  $y = en(86, "=="),
  Dy = tn(86);
var Z = f("$ZodCheck", (e, o) => {
    var r;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = o),
      (r = e._zod).onattach ?? (r.onattach = []));
  }),
  Zu = { number: "number", bigint: "bigint", object: "date" },
  Yn = f("$ZodCheckLessThan", (e, o) => {
    Z.init(e, o);
    let r = Zu[typeof o.value];
    (e._zod.onattach.push((a) => {
      let n = a._zod.bag,
        i =
          (o.inclusive ? n.maximum : n.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      o.value < i &&
        (o.inclusive ? (n.maximum = o.value) : (n.exclusiveMaximum = o.value));
    }),
      (e._zod.check = (a) => {
        (o.inclusive ? a.value <= o.value : a.value < o.value) ||
          a.issues.push({
            origin: r,
            code: "too_big",
            maximum: typeof o.value == "object" ? o.value.getTime() : o.value,
            input: a.value,
            inclusive: o.inclusive,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Xn = f("$ZodCheckGreaterThan", (e, o) => {
    Z.init(e, o);
    let r = Zu[typeof o.value];
    (e._zod.onattach.push((a) => {
      let n = a._zod.bag,
        i =
          (o.inclusive ? n.minimum : n.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      o.value > i &&
        (o.inclusive ? (n.minimum = o.value) : (n.exclusiveMinimum = o.value));
    }),
      (e._zod.check = (a) => {
        (o.inclusive ? a.value >= o.value : a.value > o.value) ||
          a.issues.push({
            origin: r,
            code: "too_small",
            minimum: typeof o.value == "object" ? o.value.getTime() : o.value,
            input: a.value,
            inclusive: o.inclusive,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Ci = f("$ZodCheckMultipleOf", (e, o) => {
    (Z.init(e, o),
      e._zod.onattach.push((r) => {
        var a;
        (a = r._zod.bag).multipleOf ?? (a.multipleOf = o.value);
      }),
      (e._zod.check = (r) => {
        if (typeof r.value != typeof o.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint"
          ? r.value % o.value === BigInt(0)
          : Zr(r.value, o.value) === 0) ||
          r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: o.value,
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Ri = f("$ZodCheckNumberFormat", (e, o) => {
    (Z.init(e, o), (o.format = o.format || "float64"));
    let r = o.format?.includes("int"),
      a = r ? "int" : "number",
      [n, i] = qr[o.format];
    (e._zod.onattach.push((s) => {
      let l = s._zod.bag;
      ((l.format = o.format),
        (l.minimum = n),
        (l.maximum = i),
        r && (l.pattern = vi));
    }),
      (e._zod.check = (s) => {
        let l = s.value;
        if (r) {
          if (!Number.isInteger(l)) {
            s.issues.push({
              expected: a,
              format: o.format,
              code: "invalid_type",
              continue: !1,
              input: l,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(l)) {
            l > 0
              ? s.issues.push({
                  input: l,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: a,
                  inclusive: !0,
                  continue: !o.abort,
                })
              : s.issues.push({
                  input: l,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: a,
                  inclusive: !0,
                  continue: !o.abort,
                });
            return;
          }
        }
        (l < n &&
          s.issues.push({
            origin: "number",
            input: l,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: e,
            continue: !o.abort,
          }),
          l > i &&
            s.issues.push({
              origin: "number",
              input: l,
              code: "too_big",
              maximum: i,
              inclusive: !0,
              inst: e,
              continue: !o.abort,
            }));
      }));
  }),
  Pi = f("$ZodCheckBigIntFormat", (e, o) => {
    Z.init(e, o);
    let [r, a] = Vr[o.format];
    (e._zod.onattach.push((n) => {
      let i = n._zod.bag;
      ((i.format = o.format), (i.minimum = r), (i.maximum = a));
    }),
      (e._zod.check = (n) => {
        let i = n.value;
        (i < r &&
          n.issues.push({
            origin: "bigint",
            input: i,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: e,
            continue: !o.abort,
          }),
          i > a &&
            n.issues.push({
              origin: "bigint",
              input: i,
              code: "too_big",
              maximum: a,
              inclusive: !0,
              inst: e,
              continue: !o.abort,
            }));
      }));
  }),
  Ti = f("$ZodCheckMaxSize", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.size !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        o.maximum < n && (a._zod.bag.maximum = o.maximum);
      }),
      (e._zod.check = (a) => {
        let n = a.value;
        n.size <= o.maximum ||
          a.issues.push({
            origin: Ht(n),
            code: "too_big",
            maximum: o.maximum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  wi = f("$ZodCheckMinSize", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.size !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        o.minimum > n && (a._zod.bag.minimum = o.minimum);
      }),
      (e._zod.check = (a) => {
        let n = a.value;
        n.size >= o.minimum ||
          a.issues.push({
            origin: Ht(n),
            code: "too_small",
            minimum: o.minimum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Ei = f("$ZodCheckSizeEquals", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.size !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag;
        ((n.minimum = o.size), (n.maximum = o.size), (n.size = o.size));
      }),
      (e._zod.check = (a) => {
        let n = a.value,
          i = n.size;
        if (i === o.size) return;
        let s = i > o.size;
        a.issues.push({
          origin: Ht(n),
          ...(s
            ? { code: "too_big", maximum: o.size }
            : { code: "too_small", minimum: o.size }),
          inclusive: !0,
          exact: !0,
          input: a.value,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  Oi = f("$ZodCheckMaxLength", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        o.maximum < n && (a._zod.bag.maximum = o.maximum);
      }),
      (e._zod.check = (a) => {
        let n = a.value;
        if (n.length <= o.maximum) return;
        let s = Jt(n);
        a.issues.push({
          origin: s,
          code: "too_big",
          maximum: o.maximum,
          inclusive: !0,
          input: n,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  Ai = f("$ZodCheckMinLength", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        o.minimum > n && (a._zod.bag.minimum = o.minimum);
      }),
      (e._zod.check = (a) => {
        let n = a.value;
        if (n.length >= o.minimum) return;
        let s = Jt(n);
        a.issues.push({
          origin: s,
          code: "too_small",
          minimum: o.minimum,
          inclusive: !0,
          input: n,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  zi = f("$ZodCheckLengthEquals", (e, o) => {
    var r;
    (Z.init(e, o),
      (r = e._zod.def).when ??
        (r.when = (a) => {
          let n = a.value;
          return !Ae(n) && n.length !== void 0;
        }),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag;
        ((n.minimum = o.length), (n.maximum = o.length), (n.length = o.length));
      }),
      (e._zod.check = (a) => {
        let n = a.value,
          i = n.length;
        if (i === o.length) return;
        let s = Jt(n),
          l = i > o.length;
        a.issues.push({
          origin: s,
          ...(l
            ? { code: "too_big", maximum: o.length }
            : { code: "too_small", minimum: o.length }),
          inclusive: !0,
          exact: !0,
          input: a.value,
          inst: e,
          continue: !o.abort,
        });
      }));
  }),
  dt = f("$ZodCheckStringFormat", (e, o) => {
    var r, a;
    (Z.init(e, o),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        ((i.format = o.format),
          o.pattern &&
            (i.patterns ?? (i.patterns = new Set()),
            i.patterns.add(o.pattern)));
      }),
      o.pattern
        ? ((r = e._zod).check ??
          (r.check = (n) => {
            ((o.pattern.lastIndex = 0),
              !o.pattern.test(n.value) &&
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: o.format,
                  input: n.value,
                  ...(o.pattern ? { pattern: o.pattern.toString() } : {}),
                  inst: e,
                  continue: !o.abort,
                }));
          }))
        : ((a = e._zod).check ?? (a.check = () => {})));
  }),
  Mi = f("$ZodCheckRegex", (e, o) => {
    (dt.init(e, o),
      (e._zod.check = (r) => {
        ((o.pattern.lastIndex = 0),
          !o.pattern.test(r.value) &&
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: r.value,
              pattern: o.pattern.toString(),
              inst: e,
              continue: !o.abort,
            }));
      }));
  }),
  $i = f("$ZodCheckLowerCase", (e, o) => {
    (o.pattern ?? (o.pattern = ki), dt.init(e, o));
  }),
  Di = f("$ZodCheckUpperCase", (e, o) => {
    (o.pattern ?? (o.pattern = Ii), dt.init(e, o));
  }),
  Ui = f("$ZodCheckIncludes", (e, o) => {
    Z.init(e, o);
    let r = le(o.includes),
      a = new RegExp(
        typeof o.position == "number" ? `^.{${o.position}}${r}` : r,
      );
    ((o.pattern = a),
      e._zod.onattach.push((n) => {
        let i = n._zod.bag;
        (i.patterns ?? (i.patterns = new Set()), i.patterns.add(a));
      }),
      (e._zod.check = (n) => {
        n.value.includes(o.includes, o.position) ||
          n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: o.includes,
            input: n.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Ni = f("$ZodCheckStartsWith", (e, o) => {
    Z.init(e, o);
    let r = new RegExp(`^${le(o.prefix)}.*`);
    (o.pattern ?? (o.pattern = r),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag;
        (n.patterns ?? (n.patterns = new Set()), n.patterns.add(r));
      }),
      (e._zod.check = (a) => {
        a.value.startsWith(o.prefix) ||
          a.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: o.prefix,
            input: a.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Zi = f("$ZodCheckEndsWith", (e, o) => {
    Z.init(e, o);
    let r = new RegExp(`.*${le(o.suffix)}$`);
    (o.pattern ?? (o.pattern = r),
      e._zod.onattach.push((a) => {
        let n = a._zod.bag;
        (n.patterns ?? (n.patterns = new Set()), n.patterns.add(r));
      }),
      (e._zod.check = (a) => {
        a.value.endsWith(o.suffix) ||
          a.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: o.suffix,
            input: a.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  });
function Nu(e, o, r) {
  e.issues.length && o.issues.push(...ne(r, e.issues));
}
c(Nu, "handleCheckPropertyResult");
var ji = f("$ZodCheckProperty", (e, o) => {
    (Z.init(e, o),
      (e._zod.check = (r) => {
        let a = o.schema._zod.run(
          { value: r.value[o.property], issues: [] },
          {},
        );
        if (a instanceof Promise) return a.then((n) => Nu(n, r, o.property));
        Nu(a, r, o.property);
      }));
  }),
  Bi = f("$ZodCheckMimeType", (e, o) => {
    Z.init(e, o);
    let r = new Set(o.mime);
    (e._zod.onattach.push((a) => {
      a._zod.bag.mime = o.mime;
    }),
      (e._zod.check = (a) => {
        r.has(a.value.type) ||
          a.issues.push({
            code: "invalid_value",
            values: o.mime,
            input: a.value.type,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  Li = f("$ZodCheckOverwrite", (e, o) => {
    (Z.init(e, o),
      (e._zod.check = (r) => {
        r.value = o.tx(r.value);
      }));
  });
var nn = class {
  static {
    c(this, "Doc");
  }
  constructor(o = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = o));
  }
  indented(o) {
    ((this.indent += 1), o(this), (this.indent -= 1));
  }
  write(o) {
    if (typeof o == "function") {
      (o(this, { execution: "sync" }), o(this, { execution: "async" }));
      return;
    }
    let a = o
        .split(
          `
`,
        )
        .filter((s) => s),
      n = Math.min(...a.map((s) => s.length - s.trimStart().length)),
      i = a.map((s) => s.slice(n)).map((s) => " ".repeat(this.indent * 2) + s);
    for (let s of i) this.content.push(s);
  }
  compile() {
    let o = Function,
      r = this?.args,
      n = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new o(
      ...r,
      n.join(`
`),
    );
  }
};
var Wi = { major: 4, minor: 3, patch: 6 };
var w = f("$ZodType", (e, o) => {
    var r;
    (e ?? (e = {}),
      (e._zod.def = o),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Wi));
    let a = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && a.unshift(e);
    for (let n of a) for (let i of n._zod.onattach) i(e);
    if (a.length === 0)
      ((r = e._zod).deferred ?? (r.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let n = c((s, l, p) => {
          let u = $e(s),
            h;
          for (let b of l) {
            if (b._zod.def.when) {
              if (!b._zod.def.when(s)) continue;
            } else if (u) continue;
            let S = s.issues.length,
              _ = b._zod.check(s);
            if (_ instanceof Promise && p?.async === !1) throw new pe();
            if (h || _ instanceof Promise)
              h = (h ?? Promise.resolve()).then(async () => {
                (await _, s.issues.length !== S && (u || (u = $e(s, S))));
              });
            else {
              if (s.issues.length === S) continue;
              u || (u = $e(s, S));
            }
          }
          return h ? h.then(() => s) : s;
        }, "runChecks"),
        i = c((s, l, p) => {
          if ($e(s)) return ((s.aborted = !0), s);
          let u = n(l, a, p);
          if (u instanceof Promise) {
            if (p.async === !1) throw new pe();
            return u.then((h) => e._zod.parse(h, p));
          }
          return e._zod.parse(u, p);
        }, "handleCanaryResult");
      e._zod.run = (s, l) => {
        if (l.skipChecks) return e._zod.parse(s, l);
        if (l.direction === "backward") {
          let u = e._zod.parse(
            { value: s.value, issues: [] },
            { ...l, skipChecks: !0 },
          );
          return u instanceof Promise ? u.then((h) => i(h, s, l)) : i(u, s, l);
        }
        let p = e._zod.parse(s, l);
        if (p instanceof Promise) {
          if (l.async === !1) throw new pe();
          return p.then((u) => n(u, a, l));
        }
        return n(p, a, l);
      };
    }
    O(e, "~standard", () => ({
      validate: c((n) => {
        try {
          let i = Hr(e, n);
          return i.success ? { value: i.data } : { issues: i.error?.issues };
        } catch {
          return Jr(e, n).then((s) =>
            s.success ? { value: s.data } : { issues: s.error?.issues },
          );
        }
      }, "validate"),
      vendor: "zod",
      version: 1,
    }));
  }),
  Ve = f("$ZodString", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? yi(e._zod.bag)),
      (e._zod.parse = (r, a) => {
        if (o.coerce)
          try {
            r.value = String(r.value);
          } catch {}
        return (
          typeof r.value == "string" ||
            r.issues.push({
              expected: "string",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
          r
        );
      }));
  }),
  U = f("$ZodStringFormat", (e, o) => {
    (dt.init(e, o), Ve.init(e, o));
  }),
  qi = f("$ZodGUID", (e, o) => {
    (o.pattern ?? (o.pattern = ri), U.init(e, o));
  }),
  Vi = f("$ZodUUID", (e, o) => {
    if (o.version) {
      let a = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        o.version
      ];
      if (a === void 0) throw new Error(`Invalid UUID version: "${o.version}"`);
      o.pattern ?? (o.pattern = qe(a));
    } else o.pattern ?? (o.pattern = qe());
    U.init(e, o);
  }),
  Gi = f("$ZodEmail", (e, o) => {
    (o.pattern ?? (o.pattern = ii), U.init(e, o));
  }),
  Ki = f("$ZodURL", (e, o) => {
    (U.init(e, o),
      (e._zod.check = (r) => {
        try {
          let a = r.value.trim(),
            n = new URL(a);
          (o.hostname &&
            ((o.hostname.lastIndex = 0),
            o.hostname.test(n.hostname) ||
              r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: o.hostname.source,
                input: r.value,
                inst: e,
                continue: !o.abort,
              })),
            o.protocol &&
              ((o.protocol.lastIndex = 0),
              o.protocol.test(
                n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol,
              ) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: o.protocol.source,
                  input: r.value,
                  inst: e,
                  continue: !o.abort,
                })),
            o.normalize ? (r.value = n.href) : (r.value = a));
          return;
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  }),
  Hi = f("$ZodEmoji", (e, o) => {
    (o.pattern ?? (o.pattern = ai()), U.init(e, o));
  }),
  Ji = f("$ZodNanoID", (e, o) => {
    (o.pattern ?? (o.pattern = ni), U.init(e, o));
  }),
  Yi = f("$ZodCUID", (e, o) => {
    (o.pattern ?? (o.pattern = Yr), U.init(e, o));
  }),
  Xi = f("$ZodCUID2", (e, o) => {
    (o.pattern ?? (o.pattern = Xr), U.init(e, o));
  }),
  Qi = f("$ZodULID", (e, o) => {
    (o.pattern ?? (o.pattern = Qr), U.init(e, o));
  }),
  ea = f("$ZodXID", (e, o) => {
    (o.pattern ?? (o.pattern = ei), U.init(e, o));
  }),
  ta = f("$ZodKSUID", (e, o) => {
    (o.pattern ?? (o.pattern = ti), U.init(e, o));
  }),
  na = f("$ZodISODateTime", (e, o) => {
    (o.pattern ?? (o.pattern = hi(o)), U.init(e, o));
  }),
  oa = f("$ZodISODate", (e, o) => {
    (o.pattern ?? (o.pattern = gi), U.init(e, o));
  }),
  ra = f("$ZodISOTime", (e, o) => {
    (o.pattern ?? (o.pattern = fi(o)), U.init(e, o));
  }),
  ia = f("$ZodISODuration", (e, o) => {
    (o.pattern ?? (o.pattern = oi), U.init(e, o));
  }),
  aa = f("$ZodIPv4", (e, o) => {
    (o.pattern ?? (o.pattern = si), U.init(e, o), (e._zod.bag.format = "ipv4"));
  }),
  sa = f("$ZodIPv6", (e, o) => {
    (o.pattern ?? (o.pattern = ci),
      U.init(e, o),
      (e._zod.bag.format = "ipv6"),
      (e._zod.check = (r) => {
        try {
          new URL(`http://[${r.value}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  }),
  ca = f("$ZodMAC", (e, o) => {
    (o.pattern ?? (o.pattern = li(o.delimiter)),
      U.init(e, o),
      (e._zod.bag.format = "mac"));
  }),
  la = f("$ZodCIDRv4", (e, o) => {
    (o.pattern ?? (o.pattern = di), U.init(e, o));
  }),
  da = f("$ZodCIDRv6", (e, o) => {
    (o.pattern ?? (o.pattern = ui),
      U.init(e, o),
      (e._zod.check = (r) => {
        let a = r.value.split("/");
        try {
          if (a.length !== 2) throw new Error();
          let [n, i] = a;
          if (!i) throw new Error();
          let s = Number(i);
          if (`${s}` !== i) throw new Error();
          if (s < 0 || s > 128) throw new Error();
          new URL(`http://[${n}]`);
        } catch {
          r.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
        }
      }));
  });
function ua(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
c(ua, "isValidBase64");
var pa = f("$ZodBase64", (e, o) => {
  (o.pattern ?? (o.pattern = pi),
    U.init(e, o),
    (e._zod.bag.contentEncoding = "base64"),
    (e._zod.check = (r) => {
      ua(r.value) ||
        r.issues.push({
          code: "invalid_format",
          format: "base64",
          input: r.value,
          inst: e,
          continue: !o.abort,
        });
    }));
});
function Xu(e) {
  if (!Hn.test(e)) return !1;
  let o = e.replace(/[-_]/g, (a) => (a === "-" ? "+" : "/")),
    r = o.padEnd(Math.ceil(o.length / 4) * 4, "=");
  return ua(r);
}
c(Xu, "isValidBase64URL");
var ma = f("$ZodBase64URL", (e, o) => {
    (o.pattern ?? (o.pattern = Hn),
      U.init(e, o),
      (e._zod.bag.contentEncoding = "base64url"),
      (e._zod.check = (r) => {
        Xu(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  ga = f("$ZodE164", (e, o) => {
    (o.pattern ?? (o.pattern = mi), U.init(e, o));
  });
function Qu(e, o = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [a] = r;
    if (!a) return !1;
    let n = JSON.parse(atob(a));
    return !(
      ("typ" in n && n?.typ !== "JWT") ||
      !n.alg ||
      (o && (!("alg" in n) || n.alg !== o))
    );
  } catch {
    return !1;
  }
}
c(Qu, "isValidJWT");
var fa = f("$ZodJWT", (e, o) => {
    (U.init(e, o),
      (e._zod.check = (r) => {
        Qu(r.value, o.alg) ||
          r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  ha = f("$ZodCustomStringFormat", (e, o) => {
    (U.init(e, o),
      (e._zod.check = (r) => {
        o.fn(r.value) ||
          r.issues.push({
            code: "invalid_format",
            format: o.format,
            input: r.value,
            inst: e,
            continue: !o.abort,
          });
      }));
  }),
  ro = f("$ZodNumber", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern = e._zod.bag.pattern ?? Jn),
      (e._zod.parse = (r, a) => {
        if (o.coerce)
          try {
            r.value = Number(r.value);
          } catch {}
        let n = r.value;
        if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
          return r;
        let i =
          typeof n == "number"
            ? Number.isNaN(n)
              ? "NaN"
              : Number.isFinite(n)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: n,
            inst: e,
            ...(i ? { received: i } : {}),
          }),
          r
        );
      }));
  }),
  ya = f("$ZodNumberFormat", (e, o) => {
    (Ri.init(e, o), ro.init(e, o));
  }),
  on = f("$ZodBoolean", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern = Si),
      (e._zod.parse = (r, a) => {
        if (o.coerce)
          try {
            r.value = !!r.value;
          } catch {}
        let n = r.value;
        return (
          typeof n == "boolean" ||
            r.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  io = f("$ZodBigInt", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern = bi),
      (e._zod.parse = (r, a) => {
        if (o.coerce)
          try {
            r.value = BigInt(r.value);
          } catch {}
        return (
          typeof r.value == "bigint" ||
            r.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: r.value,
              inst: e,
            }),
          r
        );
      }));
  }),
  ba = f("$ZodBigIntFormat", (e, o) => {
    (Pi.init(e, o), io.init(e, o));
  }),
  va = f("$ZodSymbol", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        return (
          typeof n == "symbol" ||
            r.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  Sa = f("$ZodUndefined", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern = xi),
      (e._zod.values = new Set([void 0])),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        return (
          typeof n > "u" ||
            r.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  _a = f("$ZodNull", (e, o) => {
    (w.init(e, o),
      (e._zod.pattern = _i),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        return (
          n === null ||
            r.issues.push({
              expected: "null",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  xa = f("$ZodAny", (e, o) => {
    (w.init(e, o), (e._zod.parse = (r) => r));
  }),
  ka = f("$ZodUnknown", (e, o) => {
    (w.init(e, o), (e._zod.parse = (r) => r));
  }),
  Ia = f("$ZodNever", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => (
        r.issues.push({
          expected: "never",
          code: "invalid_type",
          input: r.value,
          inst: e,
        }),
        r
      )));
  }),
  Ca = f("$ZodVoid", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        return (
          typeof n > "u" ||
            r.issues.push({
              expected: "void",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  Ra = f("$ZodDate", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        if (o.coerce)
          try {
            r.value = new Date(r.value);
          } catch {}
        let n = r.value,
          i = n instanceof Date;
        return (
          (i && !Number.isNaN(n.getTime())) ||
            r.issues.push({
              expected: "date",
              code: "invalid_type",
              input: n,
              ...(i ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          r
        );
      }));
  });
function Bu(e, o, r) {
  (e.issues.length && o.issues.push(...ne(r, e.issues)),
    (o.value[r] = e.value));
}
c(Bu, "handleArrayResult");
var Pa = f("$ZodArray", (e, o) => {
  (w.init(e, o),
    (e._zod.parse = (r, a) => {
      let n = r.value;
      if (!Array.isArray(n))
        return (
          r.issues.push({
            expected: "array",
            code: "invalid_type",
            input: n,
            inst: e,
          }),
          r
        );
      r.value = Array(n.length);
      let i = [];
      for (let s = 0; s < n.length; s++) {
        let l = n[s],
          p = o.element._zod.run({ value: l, issues: [] }, a);
        p instanceof Promise ? i.push(p.then((u) => Bu(u, r, s))) : Bu(p, r, s);
      }
      return i.length ? Promise.all(i).then(() => r) : r;
    }));
});
function oo(e, o, r, a, n) {
  if (e.issues.length) {
    if (n && !(r in a)) return;
    o.issues.push(...ne(r, e.issues));
  }
  e.value === void 0 ? r in a && (o.value[r] = void 0) : (o.value[r] = e.value);
}
c(oo, "handlePropertyResult");
function ep(e) {
  let o = Object.keys(e.shape);
  for (let a of o)
    if (!e.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  let r = Fr(e.shape);
  return {
    ...e,
    keys: o,
    keySet: new Set(o),
    numKeys: o.length,
    optionalKeys: new Set(r),
  };
}
c(ep, "normalizeDef");
function tp(e, o, r, a, n, i) {
  let s = [],
    l = n.keySet,
    p = n.catchall._zod,
    u = p.def.type,
    h = p.optout === "optional";
  for (let b in o) {
    if (l.has(b)) continue;
    if (u === "never") {
      s.push(b);
      continue;
    }
    let S = p.run({ value: o[b], issues: [] }, a);
    S instanceof Promise
      ? e.push(S.then((_) => oo(_, r, b, o, h)))
      : oo(S, r, b, o, h);
  }
  return (
    s.length &&
      r.issues.push({ code: "unrecognized_keys", keys: s, input: o, inst: i }),
    e.length ? Promise.all(e).then(() => r) : r
  );
}
c(tp, "handleCatchall");
var np = f("$ZodObject", (e, o) => {
    if ((w.init(e, o), !Object.getOwnPropertyDescriptor(o, "shape")?.get)) {
      let l = o.shape;
      Object.defineProperty(o, "shape", {
        get: c(() => {
          let p = { ...l };
          return (Object.defineProperty(o, "shape", { value: p }), p);
        }, "get"),
      });
    }
    let a = rt(() => ep(o));
    O(e._zod, "propValues", () => {
      let l = o.shape,
        p = {};
      for (let u in l) {
        let h = l[u]._zod;
        if (h.values) {
          p[u] ?? (p[u] = new Set());
          for (let b of h.values) p[u].add(b);
        }
      }
      return p;
    });
    let n = Fe,
      i = o.catchall,
      s;
    e._zod.parse = (l, p) => {
      s ?? (s = a.value);
      let u = l.value;
      if (!n(u))
        return (
          l.issues.push({
            expected: "object",
            code: "invalid_type",
            input: u,
            inst: e,
          }),
          l
        );
      l.value = {};
      let h = [],
        b = s.shape;
      for (let S of s.keys) {
        let _ = b[S],
          z = _._zod.optout === "optional",
          $ = _._zod.run({ value: u[S], issues: [] }, p);
        $ instanceof Promise
          ? h.push($.then((xe) => oo(xe, l, S, u, z)))
          : oo($, l, S, u, z);
      }
      return i
        ? tp(h, u, l, p, a.value, e)
        : h.length
          ? Promise.all(h).then(() => l)
          : l;
    };
  }),
  Ta = f("$ZodObjectJIT", (e, o) => {
    np.init(e, o);
    let r = e._zod.parse,
      a = rt(() => ep(o)),
      n = c((S) => {
        let _ = new nn(["shape", "payload", "ctx"]),
          z = a.value,
          $ = c((fe) => {
            let Y = Un(fe);
            return `shape[${Y}]._zod.run({ value: input[${Y}], issues: [] }, ctx)`;
          }, "parseStr");
        _.write("const input = payload.value;");
        let xe = Object.create(null),
          Df = 0;
        for (let fe of z.keys) xe[fe] = `key_${Df++}`;
        _.write("const newResult = {};");
        for (let fe of z.keys) {
          let Y = xe[fe],
            ue = Un(fe),
            Nf = S[fe]?._zod?.optout === "optional";
          (_.write(`const ${Y} = ${$(fe)};`),
            Nf
              ? _.write(`
        if (${Y}.issues.length) {
          if (${ue} in input) {
            payload.issues = payload.issues.concat(${Y}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${ue}, ...iss.path] : [${ue}]
            })));
          }
        }
        
        if (${Y}.value === undefined) {
          if (${ue} in input) {
            newResult[${ue}] = undefined;
          }
        } else {
          newResult[${ue}] = ${Y}.value;
        }
        
      `)
              : _.write(`
        if (${Y}.issues.length) {
          payload.issues = payload.issues.concat(${Y}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ue}, ...iss.path] : [${ue}]
          })));
        }
        
        if (${Y}.value === undefined) {
          if (${ue} in input) {
            newResult[${ue}] = undefined;
          }
        } else {
          newResult[${ue}] = ${Y}.value;
        }
        
      `));
        }
        (_.write("payload.value = newResult;"), _.write("return payload;"));
        let Uf = _.compile();
        return (fe, Y) => Uf(S, fe, Y);
      }, "generateFastpass"),
      i,
      s = Fe,
      l = !Ft.jitless,
      u = l && Br.value,
      h = o.catchall,
      b;
    e._zod.parse = (S, _) => {
      b ?? (b = a.value);
      let z = S.value;
      return s(z)
        ? l && u && _?.async === !1 && _.jitless !== !0
          ? (i || (i = n(o.shape)),
            (S = i(S, _)),
            h ? tp([], z, S, _, b, e) : S)
          : r(S, _)
        : (S.issues.push({
            expected: "object",
            code: "invalid_type",
            input: z,
            inst: e,
          }),
          S);
    };
  });
function Lu(e, o, r, a) {
  for (let i of e) if (i.issues.length === 0) return ((o.value = i.value), o);
  let n = e.filter((i) => !$e(i));
  return n.length === 1
    ? ((o.value = n[0].value), n[0])
    : (o.issues.push({
        code: "invalid_union",
        input: o.value,
        inst: r,
        errors: e.map((i) => i.issues.map((s) => X(s, a, B()))),
      }),
      o);
}
c(Lu, "handleUnionResults");
var rn = f("$ZodUnion", (e, o) => {
  (w.init(e, o),
    O(e._zod, "optin", () =>
      o.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0,
    ),
    O(e._zod, "optout", () =>
      o.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0,
    ),
    O(e._zod, "values", () => {
      if (o.options.every((n) => n._zod.values))
        return new Set(o.options.flatMap((n) => Array.from(n._zod.values)));
    }),
    O(e._zod, "pattern", () => {
      if (o.options.every((n) => n._zod.pattern)) {
        let n = o.options.map((i) => i._zod.pattern);
        return new RegExp(`^(${n.map((i) => Gt(i.source)).join("|")})$`);
      }
    }));
  let r = o.options.length === 1,
    a = o.options[0]._zod.run;
  e._zod.parse = (n, i) => {
    if (r) return a(n, i);
    let s = !1,
      l = [];
    for (let p of o.options) {
      let u = p._zod.run({ value: n.value, issues: [] }, i);
      if (u instanceof Promise) (l.push(u), (s = !0));
      else {
        if (u.issues.length === 0) return u;
        l.push(u);
      }
    }
    return s ? Promise.all(l).then((p) => Lu(p, n, e, i)) : Lu(l, n, e, i);
  };
});
function Wu(e, o, r, a) {
  let n = e.filter((i) => i.issues.length === 0);
  return n.length === 1
    ? ((o.value = n[0].value), o)
    : (n.length === 0
        ? o.issues.push({
            code: "invalid_union",
            input: o.value,
            inst: r,
            errors: e.map((i) => i.issues.map((s) => X(s, a, B()))),
          })
        : o.issues.push({
            code: "invalid_union",
            input: o.value,
            inst: r,
            errors: [],
            inclusive: !1,
          }),
      o);
}
c(Wu, "handleExclusiveUnionResults");
var wa = f("$ZodXor", (e, o) => {
    (rn.init(e, o), (o.inclusive = !1));
    let r = o.options.length === 1,
      a = o.options[0]._zod.run;
    e._zod.parse = (n, i) => {
      if (r) return a(n, i);
      let s = !1,
        l = [];
      for (let p of o.options) {
        let u = p._zod.run({ value: n.value, issues: [] }, i);
        u instanceof Promise ? (l.push(u), (s = !0)) : l.push(u);
      }
      return s ? Promise.all(l).then((p) => Wu(p, n, e, i)) : Wu(l, n, e, i);
    };
  }),
  Ea = f("$ZodDiscriminatedUnion", (e, o) => {
    ((o.inclusive = !1), rn.init(e, o));
    let r = e._zod.parse;
    O(e._zod, "propValues", () => {
      let n = {};
      for (let i of o.options) {
        let s = i._zod.propValues;
        if (!s || Object.keys(s).length === 0)
          throw new Error(
            `Invalid discriminated union option at index "${o.options.indexOf(i)}"`,
          );
        for (let [l, p] of Object.entries(s)) {
          n[l] || (n[l] = new Set());
          for (let u of p) n[l].add(u);
        }
      }
      return n;
    });
    let a = rt(() => {
      let n = o.options,
        i = new Map();
      for (let s of n) {
        let l = s._zod.propValues?.[o.discriminator];
        if (!l || l.size === 0)
          throw new Error(
            `Invalid discriminated union option at index "${o.options.indexOf(s)}"`,
          );
        for (let p of l) {
          if (i.has(p))
            throw new Error(`Duplicate discriminator value "${String(p)}"`);
          i.set(p, s);
        }
      }
      return i;
    });
    e._zod.parse = (n, i) => {
      let s = n.value;
      if (!Fe(s))
        return (
          n.issues.push({
            code: "invalid_type",
            expected: "object",
            input: s,
            inst: e,
          }),
          n
        );
      let l = a.value.get(s?.[o.discriminator]);
      return l
        ? l._zod.run(n, i)
        : o.unionFallback
          ? r(n, i)
          : (n.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              discriminator: o.discriminator,
              input: s,
              path: [o.discriminator],
              inst: e,
            }),
            n);
    };
  }),
  Oa = f("$ZodIntersection", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value,
          i = o.left._zod.run({ value: n, issues: [] }, a),
          s = o.right._zod.run({ value: n, issues: [] }, a);
        return i instanceof Promise || s instanceof Promise
          ? Promise.all([i, s]).then(([p, u]) => Fu(r, p, u))
          : Fu(r, i, s);
      }));
  });
function Fi(e, o) {
  if (e === o) return { valid: !0, data: e };
  if (e instanceof Date && o instanceof Date && +e == +o)
    return { valid: !0, data: e };
  if (Me(e) && Me(o)) {
    let r = Object.keys(o),
      a = Object.keys(e).filter((i) => r.indexOf(i) !== -1),
      n = { ...e, ...o };
    for (let i of a) {
      let s = Fi(e[i], o[i]);
      if (!s.valid)
        return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
      n[i] = s.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(o)) {
    if (e.length !== o.length) return { valid: !1, mergeErrorPath: [] };
    let r = [];
    for (let a = 0; a < e.length; a++) {
      let n = e[a],
        i = o[a],
        s = Fi(n, i);
      if (!s.valid)
        return { valid: !1, mergeErrorPath: [a, ...s.mergeErrorPath] };
      r.push(s.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
c(Fi, "mergeValues");
function Fu(e, o, r) {
  let a = new Map(),
    n;
  for (let l of o.issues)
    if (l.code === "unrecognized_keys") {
      n ?? (n = l);
      for (let p of l.keys) (a.has(p) || a.set(p, {}), (a.get(p).l = !0));
    } else e.issues.push(l);
  for (let l of r.issues)
    if (l.code === "unrecognized_keys")
      for (let p of l.keys) (a.has(p) || a.set(p, {}), (a.get(p).r = !0));
    else e.issues.push(l);
  let i = [...a].filter(([, l]) => l.l && l.r).map(([l]) => l);
  if ((i.length && n && e.issues.push({ ...n, keys: i }), $e(e))) return e;
  let s = Fi(o.value, r.value);
  if (!s.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`,
    );
  return ((e.value = s.data), e);
}
c(Fu, "handleIntersectionResults");
var ao = f("$ZodTuple", (e, o) => {
  w.init(e, o);
  let r = o.items;
  e._zod.parse = (a, n) => {
    let i = a.value;
    if (!Array.isArray(i))
      return (
        a.issues.push({
          input: i,
          inst: e,
          expected: "tuple",
          code: "invalid_type",
        }),
        a
      );
    a.value = [];
    let s = [],
      l = [...r].reverse().findIndex((h) => h._zod.optin !== "optional"),
      p = l === -1 ? 0 : r.length - l;
    if (!o.rest) {
      let h = i.length > r.length,
        b = i.length < p - 1;
      if (h || b)
        return (
          a.issues.push({
            ...(h
              ? { code: "too_big", maximum: r.length, inclusive: !0 }
              : { code: "too_small", minimum: r.length }),
            input: i,
            inst: e,
            origin: "array",
          }),
          a
        );
    }
    let u = -1;
    for (let h of r) {
      if ((u++, u >= i.length && u >= p)) continue;
      let b = h._zod.run({ value: i[u], issues: [] }, n);
      b instanceof Promise ? s.push(b.then((S) => Qn(S, a, u))) : Qn(b, a, u);
    }
    if (o.rest) {
      let h = i.slice(r.length);
      for (let b of h) {
        u++;
        let S = o.rest._zod.run({ value: b, issues: [] }, n);
        S instanceof Promise ? s.push(S.then((_) => Qn(_, a, u))) : Qn(S, a, u);
      }
    }
    return s.length ? Promise.all(s).then(() => a) : a;
  };
});
function Qn(e, o, r) {
  (e.issues.length && o.issues.push(...ne(r, e.issues)),
    (o.value[r] = e.value));
}
c(Qn, "handleTupleResult");
var Aa = f("$ZodRecord", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        if (!Me(n))
          return (
            r.issues.push({
              expected: "record",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
            r
          );
        let i = [],
          s = o.keyType._zod.values;
        if (s) {
          r.value = {};
          let l = new Set();
          for (let u of s)
            if (
              typeof u == "string" ||
              typeof u == "number" ||
              typeof u == "symbol"
            ) {
              l.add(typeof u == "number" ? u.toString() : u);
              let h = o.valueType._zod.run({ value: n[u], issues: [] }, a);
              h instanceof Promise
                ? i.push(
                    h.then((b) => {
                      (b.issues.length && r.issues.push(...ne(u, b.issues)),
                        (r.value[u] = b.value));
                    }),
                  )
                : (h.issues.length && r.issues.push(...ne(u, h.issues)),
                  (r.value[u] = h.value));
            }
          let p;
          for (let u in n) l.has(u) || ((p = p ?? []), p.push(u));
          p &&
            p.length > 0 &&
            r.issues.push({
              code: "unrecognized_keys",
              input: n,
              inst: e,
              keys: p,
            });
        } else {
          r.value = {};
          for (let l of Reflect.ownKeys(n)) {
            if (l === "__proto__") continue;
            let p = o.keyType._zod.run({ value: l, issues: [] }, a);
            if (p instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (typeof l == "string" && Jn.test(l) && p.issues.length) {
              let b = o.keyType._zod.run({ value: Number(l), issues: [] }, a);
              if (b instanceof Promise)
                throw new Error(
                  "Async schemas not supported in object keys currently",
                );
              b.issues.length === 0 && (p = b);
            }
            if (p.issues.length) {
              o.mode === "loose"
                ? (r.value[l] = n[l])
                : r.issues.push({
                    code: "invalid_key",
                    origin: "record",
                    issues: p.issues.map((b) => X(b, a, B())),
                    input: l,
                    path: [l],
                    inst: e,
                  });
              continue;
            }
            let h = o.valueType._zod.run({ value: n[l], issues: [] }, a);
            h instanceof Promise
              ? i.push(
                  h.then((b) => {
                    (b.issues.length && r.issues.push(...ne(l, b.issues)),
                      (r.value[p.value] = b.value));
                  }),
                )
              : (h.issues.length && r.issues.push(...ne(l, h.issues)),
                (r.value[p.value] = h.value));
          }
        }
        return i.length ? Promise.all(i).then(() => r) : r;
      }));
  }),
  za = f("$ZodMap", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        if (!(n instanceof Map))
          return (
            r.issues.push({
              expected: "map",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
            r
          );
        let i = [];
        r.value = new Map();
        for (let [s, l] of n) {
          let p = o.keyType._zod.run({ value: s, issues: [] }, a),
            u = o.valueType._zod.run({ value: l, issues: [] }, a);
          p instanceof Promise || u instanceof Promise
            ? i.push(
                Promise.all([p, u]).then(([h, b]) => {
                  qu(h, b, r, s, n, e, a);
                }),
              )
            : qu(p, u, r, s, n, e, a);
        }
        return i.length ? Promise.all(i).then(() => r) : r;
      }));
  });
function qu(e, o, r, a, n, i, s) {
  (e.issues.length &&
    (Kt.has(typeof a)
      ? r.issues.push(...ne(a, e.issues))
      : r.issues.push({
          code: "invalid_key",
          origin: "map",
          input: n,
          inst: i,
          issues: e.issues.map((l) => X(l, s, B())),
        })),
    o.issues.length &&
      (Kt.has(typeof a)
        ? r.issues.push(...ne(a, o.issues))
        : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: n,
            inst: i,
            key: a,
            issues: o.issues.map((l) => X(l, s, B())),
          })),
    r.value.set(e.value, o.value));
}
c(qu, "handleMapResult");
var Ma = f("$ZodSet", (e, o) => {
  (w.init(e, o),
    (e._zod.parse = (r, a) => {
      let n = r.value;
      if (!(n instanceof Set))
        return (
          r.issues.push({
            input: n,
            inst: e,
            expected: "set",
            code: "invalid_type",
          }),
          r
        );
      let i = [];
      r.value = new Set();
      for (let s of n) {
        let l = o.valueType._zod.run({ value: s, issues: [] }, a);
        l instanceof Promise ? i.push(l.then((p) => Vu(p, r))) : Vu(l, r);
      }
      return i.length ? Promise.all(i).then(() => r) : r;
    }));
});
function Vu(e, o) {
  (e.issues.length && o.issues.push(...e.issues), o.value.add(e.value));
}
c(Vu, "handleSetResult");
var $a = f("$ZodEnum", (e, o) => {
    w.init(e, o);
    let r = Vt(o.entries),
      a = new Set(r);
    ((e._zod.values = a),
      (e._zod.pattern = new RegExp(
        `^(${r
          .filter((n) => Kt.has(typeof n))
          .map((n) => (typeof n == "string" ? le(n) : n.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (n, i) => {
        let s = n.value;
        return (
          a.has(s) ||
            n.issues.push({
              code: "invalid_value",
              values: r,
              input: s,
              inst: e,
            }),
          n
        );
      }));
  }),
  Da = f("$ZodLiteral", (e, o) => {
    if ((w.init(e, o), o.values.length === 0))
      throw new Error("Cannot create literal schema with no valid values");
    let r = new Set(o.values);
    ((e._zod.values = r),
      (e._zod.pattern = new RegExp(
        `^(${o.values.map((a) => (typeof a == "string" ? le(a) : a ? le(a.toString()) : String(a))).join("|")})$`,
      )),
      (e._zod.parse = (a, n) => {
        let i = a.value;
        return (
          r.has(i) ||
            a.issues.push({
              code: "invalid_value",
              values: o.values,
              input: i,
              inst: e,
            }),
          a
        );
      }));
  }),
  Ua = f("$ZodFile", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        let n = r.value;
        return (
          n instanceof File ||
            r.issues.push({
              expected: "file",
              code: "invalid_type",
              input: n,
              inst: e,
            }),
          r
        );
      }));
  }),
  Na = f("$ZodTransform", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        if (a.direction === "backward") throw new Oe(e.constructor.name);
        let n = o.transform(r.value, r);
        if (a.async)
          return (n instanceof Promise ? n : Promise.resolve(n)).then(
            (s) => ((r.value = s), r),
          );
        if (n instanceof Promise) throw new pe();
        return ((r.value = n), r);
      }));
  });
function Gu(e, o) {
  return e.issues.length && o === void 0 ? { issues: [], value: void 0 } : e;
}
c(Gu, "handleOptionalResult");
var so = f("$ZodOptional", (e, o) => {
    (w.init(e, o),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      O(e._zod, "values", () =>
        o.innerType._zod.values
          ? new Set([...o.innerType._zod.values, void 0])
          : void 0,
      ),
      O(e._zod, "pattern", () => {
        let r = o.innerType._zod.pattern;
        return r ? new RegExp(`^(${Gt(r.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, a) => {
        if (o.innerType._zod.optin === "optional") {
          let n = o.innerType._zod.run(r, a);
          return n instanceof Promise
            ? n.then((i) => Gu(i, r.value))
            : Gu(n, r.value);
        }
        return r.value === void 0 ? r : o.innerType._zod.run(r, a);
      }));
  }),
  Za = f("$ZodExactOptional", (e, o) => {
    (so.init(e, o),
      O(e._zod, "values", () => o.innerType._zod.values),
      O(e._zod, "pattern", () => o.innerType._zod.pattern),
      (e._zod.parse = (r, a) => o.innerType._zod.run(r, a)));
  }),
  ja = f("$ZodNullable", (e, o) => {
    (w.init(e, o),
      O(e._zod, "optin", () => o.innerType._zod.optin),
      O(e._zod, "optout", () => o.innerType._zod.optout),
      O(e._zod, "pattern", () => {
        let r = o.innerType._zod.pattern;
        return r ? new RegExp(`^(${Gt(r.source)}|null)$`) : void 0;
      }),
      O(e._zod, "values", () =>
        o.innerType._zod.values
          ? new Set([...o.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (r, a) =>
        r.value === null ? r : o.innerType._zod.run(r, a)));
  }),
  Ba = f("$ZodDefault", (e, o) => {
    (w.init(e, o),
      (e._zod.optin = "optional"),
      O(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, a) => {
        if (a.direction === "backward") return o.innerType._zod.run(r, a);
        if (r.value === void 0) return ((r.value = o.defaultValue), r);
        let n = o.innerType._zod.run(r, a);
        return n instanceof Promise ? n.then((i) => Ku(i, o)) : Ku(n, o);
      }));
  });
function Ku(e, o) {
  return (e.value === void 0 && (e.value = o.defaultValue), e);
}
c(Ku, "handleDefaultResult");
var La = f("$ZodPrefault", (e, o) => {
    (w.init(e, o),
      (e._zod.optin = "optional"),
      O(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, a) => (
        a.direction === "backward" ||
          (r.value === void 0 && (r.value = o.defaultValue)),
        o.innerType._zod.run(r, a)
      )));
  }),
  Wa = f("$ZodNonOptional", (e, o) => {
    (w.init(e, o),
      O(e._zod, "values", () => {
        let r = o.innerType._zod.values;
        return r ? new Set([...r].filter((a) => a !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, a) => {
        let n = o.innerType._zod.run(r, a);
        return n instanceof Promise ? n.then((i) => Hu(i, e)) : Hu(n, e);
      }));
  });
function Hu(e, o) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: o,
      }),
    e
  );
}
c(Hu, "handleNonOptionalResult");
var Fa = f("$ZodSuccess", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => {
        if (a.direction === "backward") throw new Oe("ZodSuccess");
        let n = o.innerType._zod.run(r, a);
        return n instanceof Promise
          ? n.then((i) => ((r.value = i.issues.length === 0), r))
          : ((r.value = n.issues.length === 0), r);
      }));
  }),
  qa = f("$ZodCatch", (e, o) => {
    (w.init(e, o),
      O(e._zod, "optin", () => o.innerType._zod.optin),
      O(e._zod, "optout", () => o.innerType._zod.optout),
      O(e._zod, "values", () => o.innerType._zod.values),
      (e._zod.parse = (r, a) => {
        if (a.direction === "backward") return o.innerType._zod.run(r, a);
        let n = o.innerType._zod.run(r, a);
        return n instanceof Promise
          ? n.then(
              (i) => (
                (r.value = i.value),
                i.issues.length &&
                  ((r.value = o.catchValue({
                    ...r,
                    error: { issues: i.issues.map((s) => X(s, a, B())) },
                    input: r.value,
                  })),
                  (r.issues = [])),
                r
              ),
            )
          : ((r.value = n.value),
            n.issues.length &&
              ((r.value = o.catchValue({
                ...r,
                error: { issues: n.issues.map((i) => X(i, a, B())) },
                input: r.value,
              })),
              (r.issues = [])),
            r);
      }));
  }),
  Va = f("$ZodNaN", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) => (
        (typeof r.value != "number" || !Number.isNaN(r.value)) &&
          r.issues.push({
            input: r.value,
            inst: e,
            expected: "nan",
            code: "invalid_type",
          }),
        r
      )));
  }),
  Ga = f("$ZodPipe", (e, o) => {
    (w.init(e, o),
      O(e._zod, "values", () => o.in._zod.values),
      O(e._zod, "optin", () => o.in._zod.optin),
      O(e._zod, "optout", () => o.out._zod.optout),
      O(e._zod, "propValues", () => o.in._zod.propValues),
      (e._zod.parse = (r, a) => {
        if (a.direction === "backward") {
          let i = o.out._zod.run(r, a);
          return i instanceof Promise
            ? i.then((s) => eo(s, o.in, a))
            : eo(i, o.in, a);
        }
        let n = o.in._zod.run(r, a);
        return n instanceof Promise
          ? n.then((i) => eo(i, o.out, a))
          : eo(n, o.out, a);
      }));
  });
function eo(e, o, r) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : o._zod.run({ value: e.value, issues: e.issues }, r);
}
c(eo, "handlePipeResult");
var an = f("$ZodCodec", (e, o) => {
  (w.init(e, o),
    O(e._zod, "values", () => o.in._zod.values),
    O(e._zod, "optin", () => o.in._zod.optin),
    O(e._zod, "optout", () => o.out._zod.optout),
    O(e._zod, "propValues", () => o.in._zod.propValues),
    (e._zod.parse = (r, a) => {
      if ((a.direction || "forward") === "forward") {
        let i = o.in._zod.run(r, a);
        return i instanceof Promise ? i.then((s) => to(s, o, a)) : to(i, o, a);
      } else {
        let i = o.out._zod.run(r, a);
        return i instanceof Promise ? i.then((s) => to(s, o, a)) : to(i, o, a);
      }
    }));
});
function to(e, o, r) {
  if (e.issues.length) return ((e.aborted = !0), e);
  if ((r.direction || "forward") === "forward") {
    let n = o.transform(e.value, e);
    return n instanceof Promise
      ? n.then((i) => no(e, i, o.out, r))
      : no(e, n, o.out, r);
  } else {
    let n = o.reverseTransform(e.value, e);
    return n instanceof Promise
      ? n.then((i) => no(e, i, o.in, r))
      : no(e, n, o.in, r);
  }
}
c(to, "handleCodecAResult");
function no(e, o, r, a) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : r._zod.run({ value: o, issues: e.issues }, a);
}
c(no, "handleCodecTxResult");
var Ka = f("$ZodReadonly", (e, o) => {
  (w.init(e, o),
    O(e._zod, "propValues", () => o.innerType._zod.propValues),
    O(e._zod, "values", () => o.innerType._zod.values),
    O(e._zod, "optin", () => o.innerType?._zod?.optin),
    O(e._zod, "optout", () => o.innerType?._zod?.optout),
    (e._zod.parse = (r, a) => {
      if (a.direction === "backward") return o.innerType._zod.run(r, a);
      let n = o.innerType._zod.run(r, a);
      return n instanceof Promise ? n.then(Ju) : Ju(n);
    }));
});
function Ju(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
c(Ju, "handleReadonlyResult");
var Ha = f("$ZodTemplateLiteral", (e, o) => {
    w.init(e, o);
    let r = [];
    for (let a of o.parts)
      if (typeof a == "object" && a !== null) {
        if (!a._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`,
          );
        let n =
          a._zod.pattern instanceof RegExp
            ? a._zod.pattern.source
            : a._zod.pattern;
        if (!n)
          throw new Error(`Invalid template literal part: ${a._zod.traits}`);
        let i = n.startsWith("^") ? 1 : 0,
          s = n.endsWith("$") ? n.length - 1 : n.length;
        r.push(n.slice(i, s));
      } else if (a === null || Wr.has(typeof a)) r.push(le(`${a}`));
      else throw new Error(`Invalid template literal part: ${a}`);
    ((e._zod.pattern = new RegExp(`^${r.join("")}$`)),
      (e._zod.parse = (a, n) =>
        typeof a.value != "string"
          ? (a.issues.push({
              input: a.value,
              inst: e,
              expected: "string",
              code: "invalid_type",
            }),
            a)
          : ((e._zod.pattern.lastIndex = 0),
            e._zod.pattern.test(a.value) ||
              a.issues.push({
                input: a.value,
                inst: e,
                code: "invalid_format",
                format: o.format ?? "template_literal",
                pattern: e._zod.pattern.source,
              }),
            a)));
  }),
  Ja = f(
    "$ZodFunction",
    (e, o) => (
      w.init(e, o),
      (e._def = o),
      (e._zod.def = o),
      (e.implement = (r) => {
        if (typeof r != "function")
          throw new Error("implement() must be called with a function");
        return function (...a) {
          let n = e._def.input ? Zn(e._def.input, a) : a,
            i = Reflect.apply(r, this, n);
          return e._def.output ? Zn(e._def.output, i) : i;
        };
      }),
      (e.implementAsync = (r) => {
        if (typeof r != "function")
          throw new Error("implementAsync() must be called with a function");
        return async function (...a) {
          let n = e._def.input ? await jn(e._def.input, a) : a,
            i = await Reflect.apply(r, this, n);
          return e._def.output ? await jn(e._def.output, i) : i;
        };
      }),
      (e._zod.parse = (r, a) =>
        typeof r.value != "function"
          ? (r.issues.push({
              code: "invalid_type",
              expected: "function",
              input: r.value,
              inst: e,
            }),
            r)
          : (e._def.output && e._def.output._zod.def.type === "promise"
              ? (r.value = e.implementAsync(r.value))
              : (r.value = e.implement(r.value)),
            r)),
      (e.input = (...r) => {
        let a = e.constructor;
        return Array.isArray(r[0])
          ? new a({
              type: "function",
              input: new ao({ type: "tuple", items: r[0], rest: r[1] }),
              output: e._def.output,
            })
          : new a({ type: "function", input: r[0], output: e._def.output });
      }),
      (e.output = (r) => {
        let a = e.constructor;
        return new a({ type: "function", input: e._def.input, output: r });
      }),
      e
    ),
  ),
  Ya = f("$ZodPromise", (e, o) => {
    (w.init(e, o),
      (e._zod.parse = (r, a) =>
        Promise.resolve(r.value).then((n) =>
          o.innerType._zod.run({ value: n, issues: [] }, a),
        )));
  }),
  Xa = f("$ZodLazy", (e, o) => {
    (w.init(e, o),
      O(e._zod, "innerType", () => o.getter()),
      O(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
      O(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
      O(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
      O(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
      (e._zod.parse = (r, a) => e._zod.innerType._zod.run(r, a)));
  }),
  Qa = f("$ZodCustom", (e, o) => {
    (Z.init(e, o),
      w.init(e, o),
      (e._zod.parse = (r, a) => r),
      (e._zod.check = (r) => {
        let a = r.value,
          n = o.fn(a);
        if (n instanceof Promise) return n.then((i) => Yu(i, r, a, e));
        Yu(n, r, a, e);
      }));
  });
function Yu(e, o, r, a) {
  if (!e) {
    let n = {
      code: "custom",
      input: r,
      inst: a,
      path: [...(a._zod.def.path ?? [])],
      continue: !a._zod.def.abort,
    };
    (a._zod.def.params && (n.params = a._zod.def.params), o.issues.push(it(n)));
  }
}
c(Yu, "handleRefineResult");
var un = {};
ke(un, {
  ar: () => es,
  az: () => ts,
  be: () => ns,
  bg: () => os,
  ca: () => rs,
  cs: () => is,
  da: () => as,
  de: () => ss,
  en: () => sn,
  eo: () => cs,
  es: () => ls,
  fa: () => ds,
  fi: () => us,
  fr: () => ps,
  frCA: () => ms,
  he: () => gs,
  hu: () => fs,
  hy: () => hs,
  id: () => ys,
  is: () => bs,
  it: () => vs,
  ja: () => Ss,
  ka: () => _s,
  kh: () => xs,
  km: () => cn,
  ko: () => ks,
  lt: () => Is,
  mk: () => Cs,
  ms: () => Rs,
  nl: () => Ps,
  no: () => Ts,
  ota: () => ws,
  pl: () => Os,
  ps: () => Es,
  pt: () => As,
  ru: () => zs,
  sl: () => Ms,
  sv: () => $s,
  ta: () => Ds,
  th: () => Us,
  tr: () => Ns,
  ua: () => Zs,
  uk: () => dn,
  ur: () => js,
  uz: () => Bs,
  vi: () => Ls,
  yo: () => qs,
  zhCN: () => Ws,
  zhTW: () => Fs,
});
var Ny = c(() => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0645\u062F\u062E\u0644",
      email:
        "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string:
        "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${n.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${l}`
          : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${i}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${x(n.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${n.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${i} ${n.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${n.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${n.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${i} ${n.minimum.toString()} ${s.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${n.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${n.prefix}"`
          : i.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${i.suffix}"`
            : i.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${i.includes}"`
              : i.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${i.pattern}`
                : `${r[i.format] ?? n.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${n.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${n.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${n.keys.length > 1 ? "\u0629" : ""}: ${v(n.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${n.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${n.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
}, "error");
function es() {
  return { localeError: Ny() };
}
c(es, "default");
var Zy = c(() => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${n.expected}, daxil olan ${l}`
          : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${i}, daxil olan ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${x(n.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${n.origin ?? "d\u0259y\u0259r"} ${i}${n.maximum.toString()} ${s.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${n.origin ?? "d\u0259y\u0259r"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${n.origin} ${i}${n.minimum.toString()} ${s.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${i.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : i.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${i.suffix}" il\u0259 bitm\u0259lidir`
            : i.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${i.includes}" daxil olmal\u0131d\u0131r`
              : i.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${i.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${n.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${n.keys.length > 1 ? "lar" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${n.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
}, "error");
function ts() {
  return { localeError: Zy() };
}
c(ts, "default");
function op(e, o, r, a) {
  let n = Math.abs(e),
    i = n % 10,
    s = n % 100;
  return s >= 11 && s <= 19 ? a : i === 1 ? o : i >= 2 && i <= 4 ? r : a;
}
c(op, "getBelarusianPlural");
var jy = c(() => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration:
        "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434",
    },
    a = {
      nan: "NaN",
      number: "\u043B\u0456\u043A",
      array: "\u043C\u0430\u0441\u0456\u045E",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${n.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${l}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${i}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${x(n.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        if (s) {
          let l = Number(n.maximum),
            p = op(l, s.unit.one, s.unit.few, s.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${s.verb} ${i}${n.maximum.toString()} ${p}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        if (s) {
          let l = Number(n.minimum),
            p = op(l, s.unit.one, s.unit.few, s.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${s.verb} ${i}${n.minimum.toString()} ${p}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${i.suffix}"`
            : i.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${i.includes}"`
              : i.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${i.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${n.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${n.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${n.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${n.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
}, "error");
function ns() {
  return { localeError: jy() };
}
c(ns, "default");
var By = c(() => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
      verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0432\u0445\u043E\u0434",
      email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration:
        "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
      base64url:
        "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
      json_string: "JSON \u043D\u0438\u0437",
      e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
      jwt: "JWT",
      template_literal: "\u0432\u0445\u043E\u0434",
    },
    a = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0438\u0432",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${n.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${l}`
          : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${i}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${x(n.values[0])}`
          : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${i}${n.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`
          : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${i}${n.minimum.toString()} ${s.unit}`
          : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        if (i.format === "starts_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${i.prefix}"`;
        if (i.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${i.suffix}"`;
        if (i.format === "includes")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${i.includes}"`;
        if (i.format === "regex")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${i.pattern}`;
        let s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        return (
          i.format === "emoji" &&
            (s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
          i.format === "datetime" &&
            (s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
          i.format === "date" &&
            (s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
          i.format === "time" &&
            (s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
          i.format === "duration" &&
            (s = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
          `${s} ${r[i.format] ?? n.format}`
        );
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${n.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${n.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${n.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${n.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${n.origin}`;
      default:
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
    }
  };
}, "error");
function os() {
  return { localeError: By() };
}
c(os, "default");
var Ly = c(() => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Tipus inv\xE0lid: s'esperava instanceof ${n.expected}, s'ha rebut ${l}`
          : `Tipus inv\xE0lid: s'esperava ${i}, s'ha rebut ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${x(n.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${v(n.values, " o ")}`;
      case "too_big": {
        let i = n.inclusive ? "com a m\xE0xim" : "menys de",
          s = o(n.origin);
        return s
          ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingu\xE9s ${i} ${n.maximum.toString()} ${s.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          s = o(n.origin);
        return s
          ? `Massa petit: s'esperava que ${n.origin} contingu\xE9s ${i} ${n.minimum.toString()} ${s.unit}`
          : `Massa petit: s'esperava que ${n.origin} fos ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${i.prefix}"`
          : i.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${i.suffix}"`
            : i.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${i.includes}"`
              : i.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${i.pattern}`
                : `Format inv\xE0lid per a ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${n.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${n.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
}, "error");
function rs() {
  return { localeError: Ly() };
}
c(rs, "default");
var Wy = c(() => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    },
    a = {
      nan: "NaN",
      number: "\u010D\xEDslo",
      string: "\u0159et\u011Bzec",
      function: "funkce",
      array: "pole",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${n.expected}, obdr\u017Eeno ${l}`
          : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${i}, obdr\u017Eeno ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${x(n.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${n.origin ?? "hodnota"} mus\xED m\xEDt ${i}${n.maximum.toString()} ${s.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${n.origin ?? "hodnota"} mus\xED b\xFDt ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${n.origin ?? "hodnota"} mus\xED m\xEDt ${i}${n.minimum.toString()} ${s.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${n.origin ?? "hodnota"} mus\xED b\xFDt ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${i.prefix}"`
          : i.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${i.suffix}"`
            : i.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${i.includes}"`
              : i.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${i.pattern}`
                : `Neplatn\xFD form\xE1t ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${n.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${n.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
}, "error");
function is() {
  return { localeError: Wy() };
}
c(is, "default");
var Fy = c(() => {
  let e = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "e-mailadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkesl\xE6t",
      date: "ISO-dato",
      time: "ISO-klokkesl\xE6t",
      duration: "ISO-varighed",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodet streng",
      base64url: "base64url-kodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    },
    a = {
      nan: "NaN",
      string: "streng",
      number: "tal",
      boolean: "boolean",
      array: "liste",
      object: "objekt",
      set: "s\xE6t",
      file: "fil",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ugyldigt input: forventede instanceof ${n.expected}, fik ${l}`
          : `Ugyldigt input: forventede ${i}, fik ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ugyldig v\xE6rdi: forventede ${x(n.values[0])}`
          : `Ugyldigt valg: forventede en af f\xF8lgende ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin),
          l = a[n.origin] ?? n.origin;
        return s
          ? `For stor: forventede ${l ?? "value"} ${s.verb} ${i} ${n.maximum.toString()} ${s.unit ?? "elementer"}`
          : `For stor: forventede ${l ?? "value"} havde ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin),
          l = a[n.origin] ?? n.origin;
        return s
          ? `For lille: forventede ${l} ${s.verb} ${i} ${n.minimum.toString()} ${s.unit}`
          : `For lille: forventede ${l} havde ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ugyldig streng: skal starte med "${i.prefix}"`
          : i.format === "ends_with"
            ? `Ugyldig streng: skal ende med "${i.suffix}"`
            : i.format === "includes"
              ? `Ugyldig streng: skal indeholde "${i.includes}"`
              : i.format === "regex"
                ? `Ugyldig streng: skal matche m\xF8nsteret ${i.pattern}`
                : `Ugyldig ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xE6re deleligt med ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8gle i ${n.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xE6rdi i ${n.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
}, "error");
function as() {
  return { localeError: Fy() };
}
c(as, "default");
var qy = c(() => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    },
    a = { nan: "NaN", number: "Zahl", array: "Array" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ung\xFCltige Eingabe: erwartet instanceof ${n.expected}, erhalten ${l}`
          : `Ung\xFCltige Eingabe: erwartet ${i}, erhalten ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${x(n.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Zu gro\xDF: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ${s.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${n.origin ?? "Wert"} ${i}${n.maximum.toString()} ist`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ${s.unit} hat`
          : `Zu klein: erwartet, dass ${n.origin} ${i}${n.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${i.prefix}" beginnen`
          : i.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${i.suffix}" enden`
            : i.format === "includes"
              ? `Ung\xFCltiger String: muss "${i.includes}" enthalten`
              : i.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${i.pattern} entsprechen`
                : `Ung\xFCltig: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${n.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${n.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
}, "error");
function ss() {
  return { localeError: qy() };
}
c(ss, "default");
var Vy = c(() => {
  let e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return `Invalid input: expected ${i}, received ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Invalid input: expected ${x(n.values[0])}`
          : `Invalid option: expected one of ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Too big: expected ${n.origin ?? "value"} to have ${i}${n.maximum.toString()} ${s.unit ?? "elements"}`
          : `Too big: expected ${n.origin ?? "value"} to be ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Too small: expected ${n.origin} to have ${i}${n.minimum.toString()} ${s.unit}`
          : `Too small: expected ${n.origin} to be ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Invalid string: must start with "${i.prefix}"`
          : i.format === "ends_with"
            ? `Invalid string: must end with "${i.suffix}"`
            : i.format === "includes"
              ? `Invalid string: must include "${i.includes}"`
              : i.format === "regex"
                ? `Invalid string: must match pattern ${i.pattern}`
                : `Invalid ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${n.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${n.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${n.origin}`;
      default:
        return "Invalid input";
    }
  };
}, "error");
function sn() {
  return { localeError: Vy() };
}
c(sn, "default");
var Gy = c(() => {
  let e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "enigo",
      email: "retadreso",
      url: "URL",
      emoji: "emo\u011Dio",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datotempo",
      date: "ISO-dato",
      time: "ISO-tempo",
      duration: "ISO-da\u016Dro",
      ipv4: "IPv4-adreso",
      ipv6: "IPv6-adreso",
      cidrv4: "IPv4-rango",
      cidrv6: "IPv6-rango",
      base64: "64-ume kodita karaktraro",
      base64url: "URL-64-ume kodita karaktraro",
      json_string: "JSON-karaktraro",
      e164: "E.164-nombro",
      jwt: "JWT",
      template_literal: "enigo",
    },
    a = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Nevalida enigo: atendi\u011Dis instanceof ${n.expected}, ricevi\u011Dis ${l}`
          : `Nevalida enigo: atendi\u011Dis ${i}, ricevi\u011Dis ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Nevalida enigo: atendi\u011Dis ${x(n.values[0])}`
          : `Nevalida opcio: atendi\u011Dis unu el ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Tro granda: atendi\u011Dis ke ${n.origin ?? "valoro"} havu ${i}${n.maximum.toString()} ${s.unit ?? "elementojn"}`
          : `Tro granda: atendi\u011Dis ke ${n.origin ?? "valoro"} havu ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Tro malgranda: atendi\u011Dis ke ${n.origin} havu ${i}${n.minimum.toString()} ${s.unit}`
          : `Tro malgranda: atendi\u011Dis ke ${n.origin} estu ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Nevalida karaktraro: devas komenci\u011Di per "${i.prefix}"`
          : i.format === "ends_with"
            ? `Nevalida karaktraro: devas fini\u011Di per "${i.suffix}"`
            : i.format === "includes"
              ? `Nevalida karaktraro: devas inkluzivi "${i.includes}"`
              : i.format === "regex"
                ? `Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}`
                : `Nevalida ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${n.keys.length > 1 ? "j" : ""} \u015Dlosilo${n.keys.length > 1 ? "j" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida \u015Dlosilo en ${n.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${n.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
}, "error");
function cs() {
  return { localeError: Gy() };
}
c(cs, "default");
var Ky = c(() => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    },
    a = {
      nan: "NaN",
      string: "texto",
      number: "n\xFAmero",
      boolean: "booleano",
      array: "arreglo",
      object: "objeto",
      set: "conjunto",
      file: "archivo",
      date: "fecha",
      bigint: "n\xFAmero grande",
      symbol: "s\xEDmbolo",
      undefined: "indefinido",
      null: "nulo",
      function: "funci\xF3n",
      map: "mapa",
      record: "registro",
      tuple: "tupla",
      enum: "enumeraci\xF3n",
      union: "uni\xF3n",
      literal: "literal",
      promise: "promesa",
      void: "vac\xEDo",
      never: "nunca",
      unknown: "desconocido",
      any: "cualquiera",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Entrada inv\xE1lida: se esperaba instanceof ${n.expected}, recibido ${l}`
          : `Entrada inv\xE1lida: se esperaba ${i}, recibido ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${x(n.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin),
          l = a[n.origin] ?? n.origin;
        return s
          ? `Demasiado grande: se esperaba que ${l ?? "valor"} tuviera ${i}${n.maximum.toString()} ${s.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${l ?? "valor"} fuera ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin),
          l = a[n.origin] ?? n.origin;
        return s
          ? `Demasiado peque\xF1o: se esperaba que ${l} tuviera ${i}${n.minimum.toString()} ${s.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${l} fuera ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${i.prefix}"`
          : i.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${i.suffix}"`
            : i.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${i.includes}"`
              : i.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${i.pattern}`
                : `Inv\xE1lido ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${a[n.origin] ?? n.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${a[n.origin] ?? n.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
}, "error");
function ls() {
  return { localeError: Ky() };
}
c(ls, "default");
var Hy = c(() => {
  let e = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration:
        "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC",
    },
    a = {
      nan: "NaN",
      number: "\u0639\u062F\u062F",
      array: "\u0622\u0631\u0627\u06CC\u0647",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${n.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${l} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`
          : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${i} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${l} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${x(n.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${v(n.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${n.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${i}${n.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${n.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${i}${n.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${n.origin} \u0628\u0627\u06CC\u062F ${i}${n.minimum.toString()} ${s.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${n.origin} \u0628\u0627\u06CC\u062F ${i}${n.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${i.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : i.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${i.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : i.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${i.includes}" \u0628\u0627\u0634\u062F`
              : i.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${i.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${r[i.format] ?? n.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${n.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${n.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${n.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${n.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
}, "error");
function ds() {
  return { localeError: Hy() };
}
c(ds, "default");
var Jy = c(() => {
  let e = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${l}`
          : `Virheellinen tyyppi: odotettiin ${i}, oli ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${x(n.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Liian suuri: ${s.subject} t\xE4ytyy olla ${i}${n.maximum.toString()} ${s.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Liian pieni: ${s.subject} t\xE4ytyy olla ${i}${n.minimum.toString()} ${s.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${i.prefix}"`
          : i.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${i.suffix}"`
            : i.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${i.includes}"`
              : i.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${i.pattern}`
                : `Virheellinen ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
}, "error");
function us() {
  return { localeError: Jy() };
}
c(us, "default");
var Yy = c(() => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    },
    a = { nan: "NaN", number: "nombre", array: "tableau" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Entr\xE9e invalide : instanceof ${n.expected} attendu, ${l} re\xE7u`
          : `Entr\xE9e invalide : ${i} attendu, ${l} re\xE7u`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Entr\xE9e invalide : ${x(n.values[0])} attendu`
          : `Option invalide : une valeur parmi ${v(n.values, "|")} attendue`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Trop grand : ${n.origin ?? "valeur"} doit ${s.verb} ${i}${n.maximum.toString()} ${s.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${n.origin ?? "valeur"} doit \xEAtre ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Trop petit : ${n.origin} doit ${s.verb} ${i}${n.minimum.toString()} ${s.unit}`
          : `Trop petit : ${n.origin} doit \xEAtre ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${i.prefix}"`
          : i.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${i.suffix}"`
            : i.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${i.includes}"`
              : i.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${i.pattern}`
                : `${r[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
}, "error");
function ps() {
  return { localeError: Yy() };
}
c(ps, "default");
var Xy = c(() => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Entr\xE9e invalide : attendu instanceof ${n.expected}, re\xE7u ${l}`
          : `Entr\xE9e invalide : attendu ${i}, re\xE7u ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Entr\xE9e invalide : attendu ${x(n.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "\u2264" : "<",
          s = o(n.origin);
        return s
          ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${i}${n.maximum.toString()} ${s.unit}`
          : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? "\u2265" : ">",
          s = o(n.origin);
        return s
          ? `Trop petit : attendu que ${n.origin} ait ${i}${n.minimum.toString()} ${s.unit}`
          : `Trop petit : attendu que ${n.origin} soit ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${i.prefix}"`
          : i.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${i.suffix}"`
            : i.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${i.includes}"`
              : i.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${i.pattern}`
                : `${r[i.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
}, "error");
function ms() {
  return { localeError: Xy() };
}
c(ms, "default");
var Qy = c(() => {
  let e = {
      string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
      number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
      boolean: {
        label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
        gender: "m",
      },
      bigint: { label: "BigInt", gender: "m" },
      date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
      array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
      object: {
        label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
        gender: "m",
      },
      null: {
        label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
        gender: "m",
      },
      undefined: {
        label:
          "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
        gender: "m",
      },
      symbol: {
        label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
        gender: "m",
      },
      function: {
        label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
        gender: "f",
      },
      map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
      set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
      file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
      promise: { label: "Promise", gender: "m" },
      NaN: { label: "NaN", gender: "m" },
      unknown: {
        label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
        gender: "m",
      },
      value: { label: "\u05E2\u05E8\u05DA", gender: "m" },
    },
    o = {
      string: {
        unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
        shortLabel: "\u05E7\u05E6\u05E8",
        longLabel: "\u05D0\u05E8\u05D5\u05DA",
      },
      file: {
        unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
        shortLabel: "\u05E7\u05D8\u05DF",
        longLabel: "\u05D2\u05D3\u05D5\u05DC",
      },
      array: {
        unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
        shortLabel: "\u05E7\u05D8\u05DF",
        longLabel: "\u05D2\u05D3\u05D5\u05DC",
      },
      set: {
        unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
        shortLabel: "\u05E7\u05D8\u05DF",
        longLabel: "\u05D2\u05D3\u05D5\u05DC",
      },
      number: {
        unit: "",
        shortLabel: "\u05E7\u05D8\u05DF",
        longLabel: "\u05D2\u05D3\u05D5\u05DC",
      },
    },
    r = c((u) => (u ? e[u] : void 0), "typeEntry"),
    a = c((u) => {
      let h = r(u);
      return h ? h.label : (u ?? e.unknown.label);
    }, "typeLabel"),
    n = c((u) => `\u05D4${a(u)}`, "withDefinite"),
    i = c(
      (u) =>
        (r(u)?.gender ?? "m") === "f"
          ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
          : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
      "verbFor",
    ),
    s = c((u) => (u ? (o[u] ?? null) : null), "getSizing"),
    l = {
      regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      email: {
        label:
          "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
        gender: "f",
      },
      url: {
        label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
        gender: "f",
      },
      emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
      uuid: { label: "UUID", gender: "m" },
      nanoid: { label: "nanoid", gender: "m" },
      guid: { label: "GUID", gender: "m" },
      cuid: { label: "cuid", gender: "m" },
      cuid2: { label: "cuid2", gender: "m" },
      ulid: { label: "ULID", gender: "m" },
      xid: { label: "XID", gender: "m" },
      ksuid: { label: "KSUID", gender: "m" },
      datetime: {
        label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
        gender: "m",
      },
      date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
      time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
      duration: {
        label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
        gender: "m",
      },
      ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
      ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
      cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
      cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
      base64: {
        label:
          "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
        gender: "f",
      },
      base64url: {
        label:
          "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
        gender: "f",
      },
      json_string: {
        label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
        gender: "f",
      },
      e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
      jwt: { label: "JWT", gender: "m" },
      ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    },
    p = { nan: "NaN" };
  return (u) => {
    switch (u.code) {
      case "invalid_type": {
        let h = u.expected,
          b = p[h ?? ""] ?? a(h),
          S = k(u.input),
          _ = p[S] ?? e[S]?.label ?? S;
        return /^[A-Z]/.test(u.expected)
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${u.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${_}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${b}, \u05D4\u05EA\u05E7\u05D1\u05DC ${_}`;
      }
      case "invalid_value": {
        if (u.values.length === 1)
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${x(u.values[0])}`;
        let h = u.values.map((_) => x(_));
        if (u.values.length === 2)
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${h[0]} \u05D0\u05D5 ${h[1]}`;
        let b = h[h.length - 1];
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${h.slice(0, -1).join(", ")} \u05D0\u05D5 ${b}`;
      }
      case "too_big": {
        let h = s(u.origin),
          b = n(u.origin ?? "value");
        if (u.origin === "string")
          return `${h?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${b} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${u.maximum.toString()} ${h?.unit ?? ""} ${u.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
        if (u.origin === "number") {
          let z = u.inclusive
            ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${u.maximum}`
            : `\u05E7\u05D8\u05DF \u05DE-${u.maximum}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${b} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${z}`;
        }
        if (u.origin === "array" || u.origin === "set") {
          let z =
              u.origin === "set"
                ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                : "\u05E6\u05E8\u05D9\u05DA",
            $ = u.inclusive
              ? `${u.maximum} ${h?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
              : `\u05E4\u05D7\u05D5\u05EA \u05DE-${u.maximum} ${h?.unit ?? ""}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${b} ${z} \u05DC\u05D4\u05DB\u05D9\u05DC ${$}`.trim();
        }
        let S = u.inclusive ? "<=" : "<",
          _ = i(u.origin ?? "value");
        return h?.unit
          ? `${h.longLabel} \u05DE\u05D3\u05D9: ${b} ${_} ${S}${u.maximum.toString()} ${h.unit}`
          : `${h?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${b} ${_} ${S}${u.maximum.toString()}`;
      }
      case "too_small": {
        let h = s(u.origin),
          b = n(u.origin ?? "value");
        if (u.origin === "string")
          return `${h?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${b} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${u.minimum.toString()} ${h?.unit ?? ""} ${u.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
        if (u.origin === "number") {
          let z = u.inclusive
            ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${u.minimum}`
            : `\u05D2\u05D3\u05D5\u05DC \u05DE-${u.minimum}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${b} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${z}`;
        }
        if (u.origin === "array" || u.origin === "set") {
          let z =
            u.origin === "set"
              ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
              : "\u05E6\u05E8\u05D9\u05DA";
          if (u.minimum === 1 && u.inclusive) {
            let xe =
              (u.origin === "set",
              "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${b} ${z} \u05DC\u05D4\u05DB\u05D9\u05DC ${xe}`;
          }
          let $ = u.inclusive
            ? `${u.minimum} ${h?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
            : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${u.minimum} ${h?.unit ?? ""}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${b} ${z} \u05DC\u05D4\u05DB\u05D9\u05DC ${$}`.trim();
        }
        let S = u.inclusive ? ">=" : ">",
          _ = i(u.origin ?? "value");
        return h?.unit
          ? `${h.shortLabel} \u05DE\u05D3\u05D9: ${b} ${_} ${S}${u.minimum.toString()} ${h.unit}`
          : `${h?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${b} ${_} ${S}${u.minimum.toString()}`;
      }
      case "invalid_format": {
        let h = u;
        if (h.format === "starts_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${h.prefix}"`;
        if (h.format === "ends_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${h.suffix}"`;
        if (h.format === "includes")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${h.includes}"`;
        if (h.format === "regex")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${h.pattern}`;
        let b = l[h.format],
          S = b?.label ?? h.format,
          z =
            (b?.gender ?? "m") === "f"
              ? "\u05EA\u05E7\u05D9\u05E0\u05D4"
              : "\u05EA\u05E7\u05D9\u05DF";
        return `${S} \u05DC\u05D0 ${z}`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${u.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${u.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${u.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${v(u.keys, ", ")}`;
      case "invalid_key":
        return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${n(u.origin ?? "array")}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
}, "error");
function gs() {
  return { localeError: Qy() };
}
c(gs, "default");
var eb = c(() => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet",
    },
    a = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${n.expected}, a kapott \xE9rt\xE9k ${l}`
          : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${i}, a kapott \xE9rt\xE9k ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${x(n.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `T\xFAl nagy: ${n.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${i}${n.maximum.toString()} ${s.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${n.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${n.origin} m\xE9rete t\xFAl kicsi ${i}${n.minimum.toString()} ${s.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${n.origin} t\xFAl kicsi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${i.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : i.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${i.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : i.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${i.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : i.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${i.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${n.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${n.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${n.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
}, "error");
function fs() {
  return { localeError: eb() };
}
c(fs, "default");
function rp(e, o, r) {
  return Math.abs(e) === 1 ? o : r;
}
c(rp, "getArmenianPlural");
function ut(e) {
  if (!e) return "";
  let o = [
      "\u0561",
      "\u0565",
      "\u0568",
      "\u056B",
      "\u0578",
      "\u0578\u0582",
      "\u0585",
    ],
    r = e[e.length - 1];
  return e + (o.includes(r) ? "\u0576" : "\u0568");
}
c(ut, "withDefiniteArticle");
var tb = c(() => {
  let e = {
    string: {
      unit: {
        one: "\u0576\u0577\u0561\u0576",
        many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580",
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
    },
    file: {
      unit: {
        one: "\u0562\u0561\u0575\u0569",
        many: "\u0562\u0561\u0575\u0569\u0565\u0580",
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
    },
    array: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580",
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
    },
    set: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580",
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0574\u0578\u0582\u057F\u0584",
      email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
      url: "URL",
      emoji: "\u0567\u0574\u0578\u057B\u056B",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
      date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
      time: "ISO \u056A\u0561\u0574",
      duration:
        "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
      ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
      ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
      cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
      cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
      base64:
        "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
      base64url:
        "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
      json_string: "JSON \u057F\u0578\u0572",
      e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
      jwt: "JWT",
      template_literal: "\u0574\u0578\u0582\u057F\u0584",
    },
    a = {
      nan: "NaN",
      number: "\u0569\u056B\u057E",
      array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${n.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${l}`
          : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${i}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${x(n.values[1])}`
          : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        if (s) {
          let l = Number(n.maximum),
            p = rp(l, s.unit.one, s.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${ut(n.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${i}${n.maximum.toString()} ${p}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${ut(n.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        if (s) {
          let l = Number(n.minimum),
            p = rp(l, s.unit.one, s.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${ut(n.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${i}${n.minimum.toString()} ${p}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${ut(n.origin)} \u056C\u056B\u0576\u056B ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${i.prefix}"-\u0578\u057E`
          : i.format === "ends_with"
            ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${i.suffix}"-\u0578\u057E`
            : i.format === "includes"
              ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${i.includes}"`
              : i.format === "regex"
                ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${i.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`
                : `\u054D\u056D\u0561\u056C ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${n.divisor}-\u056B`;
      case "unrecognized_keys":
        return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${n.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${ut(n.origin)}-\u0578\u0582\u0574`;
      case "invalid_union":
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      case "invalid_element":
        return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${ut(n.origin)}-\u0578\u0582\u0574`;
      default:
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
    }
  };
}, "error");
function hs() {
  return { localeError: tb() };
}
c(hs, "default");
var nb = c(() => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${l}`
          : `Input tidak valid: diharapkan ${i}, diterima ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Input tidak valid: diharapkan ${x(n.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${i}${n.maximum.toString()} ${s.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${i}${n.minimum.toString()} ${s.unit}`
          : `Terlalu kecil: diharapkan ${n.origin} menjadi ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${i.prefix}"`
          : i.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${i.suffix}"`
            : i.format === "includes"
              ? `String tidak valid: harus menyertakan "${i.includes}"`
              : i.format === "regex"
                ? `String tidak valid: harus sesuai pola ${i.pattern}`
                : `${r[i.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${n.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${n.origin}`;
      default:
        return "Input tidak valid";
    }
  };
}, "error");
function ys() {
  return { localeError: nb() };
}
c(ys, "default");
var ob = c(() => {
  let e = {
    string: { unit: "stafi", verb: "a\xF0 hafa" },
    file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
    array: { unit: "hluti", verb: "a\xF0 hafa" },
    set: { unit: "hluti", verb: "a\xF0 hafa" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "gildi",
      email: "netfang",
      url: "vefsl\xF3\xF0",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dagsetning og t\xEDmi",
      date: "ISO dagsetning",
      time: "ISO t\xEDmi",
      duration: "ISO t\xEDmalengd",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded strengur",
      base64url: "base64url-encoded strengur",
      json_string: "JSON strengur",
      e164: "E.164 t\xF6lugildi",
      jwt: "JWT",
      template_literal: "gildi",
    },
    a = { nan: "NaN", number: "n\xFAmer", array: "fylki" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${l} \xFEar sem \xE1 a\xF0 vera instanceof ${n.expected}`
          : `Rangt gildi: \xDE\xFA sl\xF3st inn ${l} \xFEar sem \xE1 a\xF0 vera ${i}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Rangt gildi: gert r\xE1\xF0 fyrir ${x(n.values[0])}`
          : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${n.origin ?? "gildi"} hafi ${i}${n.maximum.toString()} ${s.unit ?? "hluti"}`
          : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${n.origin ?? "gildi"} s\xE9 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${n.origin} hafi ${i}${n.minimum.toString()} ${s.unit}`
          : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${n.origin} s\xE9 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${i.suffix}"`
            : i.format === "includes"
              ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${i.includes}"`
              : i.format === "regex"
                ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${i.pattern}`
                : `Rangt ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${n.divisor}`;
      case "unrecognized_keys":
        return `\xD3\xFEekkt ${n.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xED ${n.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xED ${n.origin}`;
      default:
        return "Rangt gildi";
    }
  };
}, "error");
function bs() {
  return { localeError: ob() };
}
c(bs, "default");
var rb = c(() => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN", number: "numero", array: "vettore" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Input non valido: atteso instanceof ${n.expected}, ricevuto ${l}`
          : `Input non valido: atteso ${i}, ricevuto ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Input non valido: atteso ${x(n.values[0])}`
          : `Opzione non valida: atteso uno tra ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${i}${n.maximum.toString()} ${s.unit ?? "elementi"}`
          : `Troppo grande: ${n.origin ?? "valore"} deve essere ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Troppo piccolo: ${n.origin} deve avere ${i}${n.minimum.toString()} ${s.unit}`
          : `Troppo piccolo: ${n.origin} deve essere ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${i.prefix}"`
          : i.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${i.suffix}"`
            : i.format === "includes"
              ? `Stringa non valida: deve includere "${i.includes}"`
              : i.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${i.pattern}`
                : `Invalid ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${n.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${n.origin}`;
      default:
        return "Input non valido";
    }
  };
}, "error");
function vs() {
  return { localeError: rb() };
}
c(vs, "default");
var ib = c(() => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024",
    },
    a = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${n.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${l}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u5165\u529B: ${i}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${l}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${x(n.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${v(n.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let i = n.inclusive
            ? "\u4EE5\u4E0B\u3067\u3042\u308B"
            : "\u3088\u308A\u5C0F\u3055\u3044",
          s = o(n.origin);
        return s
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${n.origin ?? "\u5024"}\u306F${n.maximum.toString()}${s.unit ?? "\u8981\u7D20"}${i}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${n.origin ?? "\u5024"}\u306F${n.maximum.toString()}${i}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let i = n.inclusive
            ? "\u4EE5\u4E0A\u3067\u3042\u308B"
            : "\u3088\u308A\u5927\u304D\u3044",
          s = o(n.origin);
        return s
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${n.origin}\u306F${n.minimum.toString()}${s.unit}${i}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${n.origin}\u306F${n.minimum.toString()}${i}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${i.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : i.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${i.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : i.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${i.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : i.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${i.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${n.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${n.keys.length > 1 ? "\u7FA4" : ""}: ${v(n.keys, "\u3001")}`;
      case "invalid_key":
        return `${n.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${n.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
}, "error");
function Ss() {
  return { localeError: ib() };
}
c(Ss, "default");
var ab = c(() => {
  let e = {
    string: {
      unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
    },
    file: {
      unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
    },
    array: {
      unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
    },
    set: {
      unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
      verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
      email:
        "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      url: "URL",
      emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
      date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
      time: "\u10D3\u10E0\u10DD",
      duration:
        "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
      ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
      cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
      base64:
        "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
      base64url:
        "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
      json_string: "JSON \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
      e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
      jwt: "JWT",
      template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    },
    a = {
      nan: "NaN",
      number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
      string: "\u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8",
      boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
      function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
      array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${n.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${l}`
          : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${i}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${x(n.values[0])}`
          : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${v(n.values, "|")}-\u10D3\u10D0\u10DC`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${s.verb} ${i}${n.maximum.toString()} ${s.unit}`
          : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n.origin} ${s.verb} ${i}${n.minimum.toString()} ${s.unit}`
          : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n.origin} \u10D8\u10E7\u10DD\u10E1 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${i.prefix}"-\u10D8\u10D7`
          : i.format === "ends_with"
            ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${i.suffix}"-\u10D8\u10D7`
            : i.format === "includes"
              ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${i.includes}"-\u10E1`
              : i.format === "regex"
                ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E1\u10E2\u10E0\u10D8\u10DC\u10D2\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${i.pattern}`
                : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${n.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
      case "unrecognized_keys":
        return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${n.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${n.origin}-\u10E8\u10D8`;
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${n.origin}-\u10E8\u10D8`;
      default:
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
    }
  };
}, "error");
function _s() {
  return { localeError: ab() };
}
c(_s, "default");
var sb = c(() => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email:
        "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji:
        "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    },
    a = {
      nan: "NaN",
      number: "\u179B\u17C1\u1781",
      array: "\u17A2\u17B6\u179A\u17C1 (Array)",
      null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${n.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${l}`
          : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${i} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${x(n.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${i} ${n.maximum.toString()} ${s.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n.origin} ${i} ${n.minimum.toString()} ${s.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n.origin} ${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${i.suffix}"`
            : i.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${i.includes}"`
              : i.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${i.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${n.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${n.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${n.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
}, "error");
function cn() {
  return { localeError: sb() };
}
c(cn, "default");
function xs() {
  return cn();
}
c(xs, "default");
var cb = c(() => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${n.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${l}\uC785\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${i}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${l}\uC785\uB2C8\uB2E4`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${x(n.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${v(n.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let i = n.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          s =
            i === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          l = o(n.origin),
          p = l?.unit ?? "\uC694\uC18C";
        return l
          ? `${n.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${n.maximum.toString()}${p} ${i}${s}`
          : `${n.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${n.maximum.toString()} ${i}${s}`;
      }
      case "too_small": {
        let i = n.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          s =
            i === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          l = o(n.origin),
          p = l?.unit ?? "\uC694\uC18C";
        return l
          ? `${n.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${n.minimum.toString()}${p} ${i}${s}`
          : `${n.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${n.minimum.toString()} ${i}${s}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${i.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : i.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${i.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : i.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${i.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : i.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${i.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${n.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${n.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${n.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
}, "error");
function ks() {
  return { localeError: cb() };
}
c(ks, "default");
var ln = c(
  (e) => e.charAt(0).toUpperCase() + e.slice(1),
  "capitalizeFirstCharacter",
);
function ip(e) {
  let o = Math.abs(e),
    r = o % 10,
    a = o % 100;
  return (a >= 11 && a <= 19) || r === 0 ? "many" : r === 1 ? "one" : "few";
}
c(ip, "getUnitTypeFromNumber");
var lb = c(() => {
  let e = {
    string: {
      unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
        },
      },
    },
    file: {
      unit: { one: "baitas", few: "baitai", many: "bait\u0173" },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip",
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip",
        },
      },
    },
    array: {
      unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip",
        },
      },
    },
    set: {
      unit: { one: "element\u0105", few: "elementus", many: "element\u0173" },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip",
        },
      },
    },
  };
  function o(n, i, s, l) {
    let p = e[n] ?? null;
    return p === null
      ? p
      : { unit: p.unit[i], verb: p.verb[l][s ? "inclusive" : "notInclusive"] };
  }
  c(o, "getSizing");
  let r = {
      regex: "\u012Fvestis",
      email: "el. pa\u0161to adresas",
      url: "URL",
      emoji: "jaustukas",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO data ir laikas",
      date: "ISO data",
      time: "ISO laikas",
      duration: "ISO trukm\u0117",
      ipv4: "IPv4 adresas",
      ipv6: "IPv6 adresas",
      cidrv4: "IPv4 tinklo prefiksas (CIDR)",
      cidrv6: "IPv6 tinklo prefiksas (CIDR)",
      base64: "base64 u\u017Ekoduota eilut\u0117",
      base64url: "base64url u\u017Ekoduota eilut\u0117",
      json_string: "JSON eilut\u0117",
      e164: "E.164 numeris",
      jwt: "JWT",
      template_literal: "\u012Fvestis",
    },
    a = {
      nan: "NaN",
      number: "skai\u010Dius",
      bigint: "sveikasis skai\u010Dius",
      string: "eilut\u0117",
      boolean: "login\u0117 reik\u0161m\u0117",
      undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
      function: "funkcija",
      symbol: "simbolis",
      array: "masyvas",
      object: "objektas",
      null: "nulin\u0117 reik\u0161m\u0117",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Gautas tipas ${l}, o tik\u0117tasi - instanceof ${n.expected}`
          : `Gautas tipas ${l}, o tik\u0117tasi - ${i}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Privalo b\u016Bti ${x(n.values[0])}`
          : `Privalo b\u016Bti vienas i\u0161 ${v(n.values, "|")} pasirinkim\u0173`;
      case "too_big": {
        let i = a[n.origin] ?? n.origin,
          s = o(n.origin, ip(Number(n.maximum)), n.inclusive ?? !1, "smaller");
        if (s?.verb)
          return `${ln(i ?? n.origin ?? "reik\u0161m\u0117")} ${s.verb} ${n.maximum.toString()} ${s.unit ?? "element\u0173"}`;
        let l = n.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return `${ln(i ?? n.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${l} ${n.maximum.toString()} ${s?.unit}`;
      }
      case "too_small": {
        let i = a[n.origin] ?? n.origin,
          s = o(n.origin, ip(Number(n.minimum)), n.inclusive ?? !1, "bigger");
        if (s?.verb)
          return `${ln(i ?? n.origin ?? "reik\u0161m\u0117")} ${s.verb} ${n.minimum.toString()} ${s.unit ?? "element\u0173"}`;
        let l = n.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return `${ln(i ?? n.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${l} ${n.minimum.toString()} ${s?.unit}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Eilut\u0117 privalo prasid\u0117ti "${i.prefix}"`
          : i.format === "ends_with"
            ? `Eilut\u0117 privalo pasibaigti "${i.suffix}"`
            : i.format === "includes"
              ? `Eilut\u0117 privalo \u012Ftraukti "${i.includes}"`
              : i.format === "regex"
                ? `Eilut\u0117 privalo atitikti ${i.pattern}`
                : `Neteisingas ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Skai\u010Dius privalo b\u016Bti ${n.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpa\u017Eint${n.keys.length > 1 ? "i" : "as"} rakt${n.keys.length > 1 ? "ai" : "as"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        let i = a[n.origin] ?? n.origin;
        return `${ln(i ?? n.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
}, "error");
function Is() {
  return { localeError: lb() };
}
c(Is, "default");
var db = c(() => {
  let e = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0432\u043D\u0435\u0441",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration:
        "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64:
        "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url:
        "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441",
    },
    a = {
      nan: "NaN",
      number: "\u0431\u0440\u043E\u0458",
      array: "\u043D\u0438\u0437\u0430",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${n.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${l}`
          : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${i}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Invalid input: expected ${x(n.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${i}${n.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n.origin} \u0434\u0430 \u0438\u043C\u0430 ${i}${n.minimum.toString()} ${s.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${i.suffix}"`
            : i.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${i.includes}"`
              : i.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${i.pattern}`
                : `Invalid ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${n.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${n.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
}, "error");
function Cs() {
  return { localeError: db() };
}
c(Cs, "default");
var ub = c(() => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN", number: "nombor" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${l}`
          : `Input tidak sah: dijangka ${i}, diterima ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Input tidak sah: dijangka ${x(n.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${s.verb} ${i}${n.maximum.toString()} ${s.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Terlalu kecil: dijangka ${n.origin} ${s.verb} ${i}${n.minimum.toString()} ${s.unit}`
          : `Terlalu kecil: dijangka ${n.origin} adalah ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${i.prefix}"`
          : i.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${i.suffix}"`
            : i.format === "includes"
              ? `String tidak sah: mesti mengandungi "${i.includes}"`
              : i.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${i.pattern}`
                : `${r[i.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${n.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${n.origin}`;
      default:
        return "Input tidak sah";
    }
  };
}, "error");
function Rs() {
  return { localeError: ub() };
}
c(Rs, "default");
var pb = c(() => {
  let e = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    },
    a = { nan: "NaN", number: "getal" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${l}`
          : `Ongeldige invoer: verwacht ${i}, ontving ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ongeldige invoer: verwacht ${x(n.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin),
          l =
            n.origin === "date"
              ? "laat"
              : n.origin === "string"
                ? "lang"
                : "groot";
        return s
          ? `Te ${l}: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} ${s.unit ?? "elementen"} ${s.verb}`
          : `Te ${l}: verwacht dat ${n.origin ?? "waarde"} ${i}${n.maximum.toString()} is`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin),
          l =
            n.origin === "date"
              ? "vroeg"
              : n.origin === "string"
                ? "kort"
                : "klein";
        return s
          ? `Te ${l}: verwacht dat ${n.origin} ${i}${n.minimum.toString()} ${s.unit} ${s.verb}`
          : `Te ${l}: verwacht dat ${n.origin} ${i}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ongeldige tekst: moet met "${i.prefix}" beginnen`
          : i.format === "ends_with"
            ? `Ongeldige tekst: moet op "${i.suffix}" eindigen`
            : i.format === "includes"
              ? `Ongeldige tekst: moet "${i.includes}" bevatten`
              : i.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${i.pattern}`
                : `Ongeldig: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${n.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${n.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
}, "error");
function Ps() {
  return { localeError: pb() };
}
c(Ps, "default");
var mb = c(() => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    },
    a = { nan: "NaN", number: "tall", array: "liste" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ugyldig input: forventet instanceof ${n.expected}, fikk ${l}`
          : `Ugyldig input: forventet ${i}, fikk ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ugyldig verdi: forventet ${x(n.values[0])}`
          : `Ugyldig valg: forventet en av ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `For stor(t): forventet ${n.origin ?? "value"} til \xE5 ha ${i}${n.maximum.toString()} ${s.unit ?? "elementer"}`
          : `For stor(t): forventet ${n.origin ?? "value"} til \xE5 ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `For lite(n): forventet ${n.origin} til \xE5 ha ${i}${n.minimum.toString()} ${s.unit}`
          : `For lite(n): forventet ${n.origin} til \xE5 ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${i.prefix}"`
          : i.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${i.suffix}"`
            : i.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${i.includes}"`
              : i.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${i.pattern}`
                : `Ugyldig ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${n.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${n.origin}`;
      default:
        return "Ugyldig input";
    }
  };
}, "error");
function Ts() {
  return { localeError: mb() };
}
c(Ts, "default");
var gb = c(() => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    },
    a = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `F\xE2sit giren: umulan instanceof ${n.expected}, al\u0131nan ${l}`
          : `F\xE2sit giren: umulan ${i}, al\u0131nan ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `F\xE2sit giren: umulan ${x(n.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Fazla b\xFCy\xFCk: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} ${s.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${n.origin ?? "value"}, ${i}${n.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Fazla k\xFC\xE7\xFCk: ${n.origin}, ${i}${n.minimum.toString()} ${s.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${n.origin}, ${i}${n.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `F\xE2sit metin: "${i.prefix}" ile ba\u015Flamal\u0131.`
          : i.format === "ends_with"
            ? `F\xE2sit metin: "${i.suffix}" ile bitmeli.`
            : i.format === "includes"
              ? `F\xE2sit metin: "${i.includes}" ihtiv\xE2 etmeli.`
              : i.format === "regex"
                ? `F\xE2sit metin: ${i.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${n.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${n.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
}, "error");
function ws() {
  return { localeError: gb() };
}
c(ws, "default");
var fb = c(() => {
  let e = {
    string: {
      unit: "\u062A\u0648\u06A9\u064A",
      verb: "\u0648\u0644\u0631\u064A",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u067C\u0633",
      verb: "\u0648\u0644\u0631\u064A",
    },
    array: {
      unit: "\u062A\u0648\u06A9\u064A",
      verb: "\u0648\u0644\u0631\u064A",
    },
    set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0648\u0631\u0648\u062F\u064A",
      email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
      date: "\u0646\u06D0\u067C\u0647",
      time: "\u0648\u062E\u062A",
      duration: "\u0645\u0648\u062F\u0647",
      ipv4: "\u062F IPv4 \u067E\u062A\u0647",
      ipv6: "\u062F IPv6 \u067E\u062A\u0647",
      cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
      cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
      base64: "base64-encoded \u0645\u062A\u0646",
      base64url: "base64url-encoded \u0645\u062A\u0646",
      json_string: "JSON \u0645\u062A\u0646",
      e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u064A",
    },
    a = {
      nan: "NaN",
      number: "\u0639\u062F\u062F",
      array: "\u0627\u0631\u06D0",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${n.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${l} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`
          : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${i} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${l} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${x(n.values[0])} \u0648\u0627\u06CC`
          : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${v(n.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${n.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${i}${n.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`
          : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${n.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${i}${n.maximum.toString()} \u0648\u064A`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${n.origin} \u0628\u0627\u06CC\u062F ${i}${n.minimum.toString()} ${s.unit} \u0648\u0644\u0631\u064A`
          : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${n.origin} \u0628\u0627\u06CC\u062F ${i}${n.minimum.toString()} \u0648\u064A`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${i.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`
          : i.format === "ends_with"
            ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${i.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`
            : i.format === "includes"
              ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${i.includes}" \u0648\u0644\u0631\u064A`
              : i.format === "regex"
                ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${i.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`
                : `${r[i.format] ?? n.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
      }
      case "not_multiple_of":
        return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${n.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
      case "unrecognized_keys":
        return `\u0646\u0627\u0633\u0645 ${n.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${n.origin} \u06A9\u06D0`;
      case "invalid_union":
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
      case "invalid_element":
        return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${n.origin} \u06A9\u06D0`;
      default:
        return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
    }
  };
}, "error");
function Es() {
  return { localeError: fb() };
}
c(Es, "default");
var hb = c(() => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie",
    },
    a = { nan: "NaN", number: "liczba", array: "tablica" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${n.expected}, otrzymano ${l}`
          : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${i}, otrzymano ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${x(n.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${n.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${i}${n.maximum.toString()} ${s.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${n.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${n.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${i}${n.minimum.toString()} ${s.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${n.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${i.prefix}"`
          : i.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${i.suffix}"`
            : i.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${i.includes}"`
              : i.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${i.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${n.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${n.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
}, "error");
function Os() {
  return { localeError: hb() };
}
c(Os, "default");
var yb = c(() => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    },
    a = { nan: "NaN", number: "n\xFAmero", null: "nulo" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Tipo inv\xE1lido: esperado instanceof ${n.expected}, recebido ${l}`
          : `Tipo inv\xE1lido: esperado ${i}, recebido ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${x(n.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${i}${n.maximum.toString()} ${s.unit ?? "elementos"}`
          : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Muito pequeno: esperado que ${n.origin} tivesse ${i}${n.minimum.toString()} ${s.unit}`
          : `Muito pequeno: esperado que ${n.origin} fosse ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${i.prefix}"`
          : i.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${i.suffix}"`
            : i.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${i.includes}"`
              : i.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${i.pattern}`
                : `${r[i.format] ?? n.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${n.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${n.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
}, "error");
function As() {
  return { localeError: yb() };
}
c(As, "default");
function ap(e, o, r, a) {
  let n = Math.abs(e),
    i = n % 10,
    s = n % 100;
  return s >= 11 && s <= 19 ? a : i === 1 ? o : i >= 2 && i <= 4 ? r : a;
}
c(ap, "getRussianPlural");
var bb = c(() => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration:
        "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434",
    },
    a = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0441\u0438\u0432",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${n.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${l}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${i}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${x(n.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        if (s) {
          let l = Number(n.maximum),
            p = ap(l, s.unit.one, s.unit.few, s.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${i}${n.maximum.toString()} ${p}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        if (s) {
          let l = Number(n.minimum),
            p = ap(l, s.unit.one, s.unit.few, s.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${i}${n.minimum.toString()} ${p}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n.origin} \u0431\u0443\u0434\u0435\u0442 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${i.suffix}"`
            : i.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${i.includes}"`
              : i.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${i.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${n.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${n.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${n.keys.length > 1 ? "\u0438" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${n.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${n.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
}, "error");
function zs() {
  return { localeError: bb() };
}
c(zs, "default");
var vb = c(() => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    },
    a = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Neveljaven vnos: pri\u010Dakovano instanceof ${n.expected}, prejeto ${l}`
          : `Neveljaven vnos: pri\u010Dakovano ${i}, prejeto ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${x(n.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Preveliko: pri\u010Dakovano, da bo ${n.origin ?? "vrednost"} imelo ${i}${n.maximum.toString()} ${s.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${n.origin ?? "vrednost"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Premajhno: pri\u010Dakovano, da bo ${n.origin} imelo ${i}${n.minimum.toString()} ${s.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${i.prefix}"`
          : i.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${i.suffix}"`
            : i.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${i.includes}"`
              : i.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${i.pattern}`
                : `Neveljaven ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${n.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${n.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
}, "error");
function Ms() {
  return { localeError: vb() };
}
c(Ms, "default");
var Sb = c(() => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    },
    a = { nan: "NaN", number: "antal", array: "lista" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${n.expected}, fick ${l}`
          : `Ogiltig inmatning: f\xF6rv\xE4ntat ${i}, fick ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${x(n.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${n.origin ?? "v\xE4rdet"} att ha ${i}${n.maximum.toString()} ${s.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${n.origin ?? "v\xE4rdet"} att ha ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${n.origin ?? "v\xE4rdet"} att ha ${i}${n.minimum.toString()} ${s.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${n.origin ?? "v\xE4rdet"} att ha ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${i.prefix}"`
          : i.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${i.suffix}"`
            : i.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${i.includes}"`
              : i.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${i.pattern}"`
                : `Ogiltig(t) ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${n.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${n.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
}, "error");
function $s() {
  return { localeError: Sb() };
}
c($s, "default");
var _b = c(() => {
  let e = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email:
        "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input",
    },
    a = {
      nan: "NaN",
      number: "\u0B8E\u0BA3\u0BCD",
      array: "\u0B85\u0BA3\u0BBF",
      null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${n.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${l}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${i}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${x(n.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${v(n.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${i}${n.maximum.toString()} ${s.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${i}${n.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n.origin} ${i}${n.minimum.toString()} ${s.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n.origin} ${i}${n.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${i.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : i.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${i.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : i.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${i.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : i.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${i.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${n.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${n.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${n.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
}, "error");
function Ds() {
  return { localeError: _b() };
}
c(Ds, "default");
var xb = c(() => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email:
        "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration:
        "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    },
    a = {
      nan: "NaN",
      number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
      array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
      null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${n.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${l}`
          : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${i} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${x(n.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          s = o(n.origin);
        return s
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${i} ${n.maximum.toString()} ${s.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${i} ${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          s = o(n.origin);
        return s
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${i} ${n.minimum.toString()} ${s.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${i} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${i.suffix}"`
            : i.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${i.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : i.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${i.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${n.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${n.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${n.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
}, "error");
function Us() {
  return { localeError: xb() };
}
c(Us, "default");
var kb = c(() => {
  let e = {
    string: { unit: "karakter", verb: "olmal\u0131" },
    file: { unit: "bayt", verb: "olmal\u0131" },
    array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${n.expected}, al\u0131nan ${l}`
          : `Ge\xE7ersiz de\u011Fer: beklenen ${i}, al\u0131nan ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Ge\xE7ersiz de\u011Fer: beklenen ${x(n.values[0])}`
          : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\xC7ok b\xFCy\xFCk: beklenen ${n.origin ?? "de\u011Fer"} ${i}${n.maximum.toString()} ${s.unit ?? "\xF6\u011Fe"}`
          : `\xC7ok b\xFCy\xFCk: beklenen ${n.origin ?? "de\u011Fer"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${n.origin} ${i}${n.minimum.toString()} ${s.unit}`
          : `\xC7ok k\xFC\xE7\xFCk: beklenen ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Ge\xE7ersiz metin: "${i.prefix}" ile ba\u015Flamal\u0131`
          : i.format === "ends_with"
            ? `Ge\xE7ersiz metin: "${i.suffix}" ile bitmeli`
            : i.format === "includes"
              ? `Ge\xE7ersiz metin: "${i.includes}" i\xE7ermeli`
              : i.format === "regex"
                ? `Ge\xE7ersiz metin: ${i.pattern} desenine uymal\u0131`
                : `Ge\xE7ersiz ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${n.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${n.keys.length > 1 ? "lar" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${n.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return "Ge\xE7ersiz de\u011Fer";
    }
  };
}, "error");
function Ns() {
  return { localeError: kb() };
}
c(Ns, "default");
var Ib = c(() => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration:
        "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal:
        "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    },
    a = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0438\u0432",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${n.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${l}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${i}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${x(n.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${s.verb} ${i}${n.maximum.toString()} ${s.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n.origin} ${s.verb} ${i}${n.minimum.toString()} ${s.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n.origin} \u0431\u0443\u0434\u0435 ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${i.suffix}"`
            : i.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${i.includes}"`
              : i.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${i.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${n.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${n.keys.length > 1 ? "\u0456" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${n.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${n.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
}, "error");
function dn() {
  return { localeError: Ib() };
}
c(dn, "default");
function Zs() {
  return dn();
}
c(Zs, "default");
var Cb = c(() => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0627\u0646 \u067E\u0679",
      email:
        "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid:
        "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64:
        "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url:
        "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string:
        "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679",
    },
    a = {
      nan: "NaN",
      number: "\u0646\u0645\u0628\u0631",
      array: "\u0622\u0631\u06D2",
      null: "\u0646\u0644",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${n.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${l} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`
          : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${i} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${l} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${x(n.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${v(n.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${n.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${i}${n.maximum.toString()} ${s.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${n.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${i}${n.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${n.origin} \u06A9\u06D2 ${i}${n.minimum.toString()} ${s.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${n.origin} \u06A9\u0627 ${i}${n.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${i.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : i.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${i.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : i.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${i.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : i.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${i.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${n.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${n.keys.length > 1 ? "\u0632" : ""}: ${v(n.keys, "\u060C ")}`;
      case "invalid_key":
        return `${n.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${n.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
}, "error");
function js() {
  return { localeError: Cb() };
}
c(js, "default");
var Rb = c(() => {
  let e = {
    string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
    file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
    array: { unit: "element", verb: "bo\u2018lishi kerak" },
    set: { unit: "element", verb: "bo\u2018lishi kerak" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "kirish",
      email: "elektron pochta manzili",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO sana va vaqti",
      date: "ISO sana",
      time: "ISO vaqt",
      duration: "ISO davomiylik",
      ipv4: "IPv4 manzil",
      ipv6: "IPv6 manzil",
      mac: "MAC manzil",
      cidrv4: "IPv4 diapazon",
      cidrv6: "IPv6 diapazon",
      base64: "base64 kodlangan satr",
      base64url: "base64url kodlangan satr",
      json_string: "JSON satr",
      e164: "E.164 raqam",
      jwt: "JWT",
      template_literal: "kirish",
    },
    a = { nan: "NaN", number: "raqam", array: "massiv" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${l}`
          : `Noto\u2018g\u2018ri kirish: kutilgan ${i}, qabul qilingan ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `Noto\u2018g\u2018ri kirish: kutilgan ${x(n.values[0])}`
          : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${i}${n.maximum.toString()} ${s.unit} ${s.verb}`
          : `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Juda kichik: kutilgan ${n.origin} ${i}${n.minimum.toString()} ${s.unit} ${s.verb}`
          : `Juda kichik: kutilgan ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Noto\u2018g\u2018ri satr: "${i.prefix}" bilan boshlanishi kerak`
          : i.format === "ends_with"
            ? `Noto\u2018g\u2018ri satr: "${i.suffix}" bilan tugashi kerak`
            : i.format === "includes"
              ? `Noto\u2018g\u2018ri satr: "${i.includes}" ni o\u2018z ichiga olishi kerak`
              : i.format === "regex"
                ? `Noto\u2018g\u2018ri satr: ${i.pattern} shabloniga mos kelishi kerak`
                : `Noto\u2018g\u2018ri ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Noto\u2018g\u2018ri raqam: ${n.divisor} ning karralisi bo\u2018lishi kerak`;
      case "unrecognized_keys":
        return `Noma\u2019lum kalit${n.keys.length > 1 ? "lar" : ""}: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} dagi kalit noto\u2018g\u2018ri`;
      case "invalid_union":
        return "Noto\u2018g\u2018ri kirish";
      case "invalid_element":
        return `${n.origin} da noto\u2018g\u2018ri qiymat`;
      default:
        return "Noto\u2018g\u2018ri kirish";
    }
  };
}, "error");
function Bs() {
  return { localeError: Rb() };
}
c(Bs, "default");
var Pb = c(() => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o",
    },
    a = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${n.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${l}`
          : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${i}, nh\u1EADn \u0111\u01B0\u1EE3c ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${x(n.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${n.origin ?? "gi\xE1 tr\u1ECB"} ${s.verb} ${i}${n.maximum.toString()} ${s.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${n.origin ?? "gi\xE1 tr\u1ECB"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${n.origin} ${s.verb} ${i}${n.minimum.toString()} ${s.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${i.prefix}"`
          : i.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${i.suffix}"`
            : i.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${i.includes}"`
              : i.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${i.pattern}`
                : `${r[i.format] ?? n.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${n.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${n.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${n.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
}, "error");
function Ls() {
  return { localeError: Pb() };
}
c(Ls, "default");
var Tb = c(() => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165",
    },
    a = {
      nan: "NaN",
      number: "\u6570\u5B57",
      array: "\u6570\u7EC4",
      null: "\u7A7A\u503C(null)",
    };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${n.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${l}`
          : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${i}\uFF0C\u5B9E\u9645\u63A5\u6536 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${x(n.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${n.origin ?? "\u503C"} ${i}${n.maximum.toString()} ${s.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${n.origin ?? "\u503C"} ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${n.origin} ${i}${n.minimum.toString()} ${s.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${n.origin} ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${i.prefix}" \u5F00\u5934`
          : i.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${i.suffix}" \u7ED3\u5C3E`
            : i.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${i.includes}"`
              : i.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${i.pattern}`
                : `\u65E0\u6548${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${n.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${n.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
}, "error");
function Ws() {
  return { localeError: Tb() };
}
c(Ws, "default");
var wb = c(() => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165",
    },
    a = { nan: "NaN" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${n.expected}\uFF0C\u4F46\u6536\u5230 ${l}`
          : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${i}\uFF0C\u4F46\u6536\u5230 ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${x(n.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${n.origin ?? "\u503C"} \u61C9\u70BA ${i}${n.maximum.toString()} ${s.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${n.origin ?? "\u503C"} \u61C9\u70BA ${i}${n.maximum.toString()}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${n.origin} \u61C9\u70BA ${i}${n.minimum.toString()} ${s.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${n.origin} \u61C9\u70BA ${i}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${i.prefix}" \u958B\u982D`
          : i.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${i.suffix}" \u7D50\u5C3E`
            : i.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${i.includes}"`
              : i.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${i.pattern}`
                : `\u7121\u6548\u7684 ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${n.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${n.keys.length > 1 ? "\u5011" : ""}\uFF1A${v(n.keys, "\u3001")}`;
      case "invalid_key":
        return `${n.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${n.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
}, "error");
function Fs() {
  return { localeError: wb() };
}
c(Fs, "default");
var Eb = c(() => {
  let e = {
    string: { unit: "\xE0mi", verb: "n\xED" },
    file: { unit: "bytes", verb: "n\xED" },
    array: { unit: "nkan", verb: "n\xED" },
    set: { unit: "nkan", verb: "n\xED" },
  };
  function o(n) {
    return e[n] ?? null;
  }
  c(o, "getSizing");
  let r = {
      regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
      email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\xE0k\xF3k\xF2 ISO",
      date: "\u1ECDj\u1ECD\u0301 ISO",
      time: "\xE0k\xF3k\xF2 ISO",
      duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
      ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
      ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
      cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
      cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
      base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
      base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
      json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
      e164: "n\u1ECD\u0301mb\xE0 E.164",
      jwt: "JWT",
      template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    },
    a = { nan: "NaN", number: "n\u1ECD\u0301mb\xE0", array: "akop\u1ECD" };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        let i = a[n.expected] ?? n.expected,
          s = k(n.input),
          l = a[s] ?? s;
        return /^[A-Z]/.test(n.expected)
          ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${n.expected}, \xE0m\u1ECD\u0300 a r\xED ${l}`
          : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${i}, \xE0m\u1ECD\u0300 a r\xED ${l}`;
      }
      case "invalid_value":
        return n.values.length === 1
          ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${x(n.values[0])}`
          : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${v(n.values, "|")}`;
      case "too_big": {
        let i = n.inclusive ? "<=" : "<",
          s = o(n.origin);
        return s
          ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${n.origin ?? "iye"} ${s.verb} ${i}${n.maximum} ${s.unit}`
          : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${i}${n.maximum}`;
      }
      case "too_small": {
        let i = n.inclusive ? ">=" : ">",
          s = o(n.origin);
        return s
          ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${n.origin} ${s.verb} ${i}${n.minimum} ${s.unit}`
          : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${i}${n.minimum}`;
      }
      case "invalid_format": {
        let i = n;
        return i.format === "starts_with"
          ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${i.prefix}"`
          : i.format === "ends_with"
            ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${i.suffix}"`
            : i.format === "includes"
              ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${i.includes}"`
              : i.format === "regex"
                ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${i.pattern}`
                : `A\u1E63\xEC\u1E63e: ${r[i.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${n.divisor}`;
      case "unrecognized_keys":
        return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${v(n.keys, ", ")}`;
      case "invalid_key":
        return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${n.origin}`;
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${n.origin}`;
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
}, "error");
function qs() {
  return { localeError: Eb() };
}
c(qs, "default");
var sp,
  Vs = Symbol("ZodOutput"),
  Gs = Symbol("ZodInput"),
  co = class {
    static {
      c(this, "$ZodRegistry");
    }
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(o, ...r) {
      let a = r[0];
      return (
        this._map.set(o, a),
        a && typeof a == "object" && "id" in a && this._idmap.set(a.id, o),
        this
      );
    }
    clear() {
      return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
    }
    remove(o) {
      let r = this._map.get(o);
      return (
        r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
        this._map.delete(o),
        this
      );
    }
    get(o) {
      let r = o._zod.parent;
      if (r) {
        let a = { ...(this.get(r) ?? {}) };
        delete a.id;
        let n = { ...a, ...this._map.get(o) };
        return Object.keys(n).length ? n : void 0;
      }
      return this._map.get(o);
    }
    has(o) {
      return this._map.has(o);
    }
  };
function lo() {
  return new co();
}
c(lo, "registry");
(sp = globalThis).__zod_globalRegistry ?? (sp.__zod_globalRegistry = lo());
var q = globalThis.__zod_globalRegistry;
function Ks(e, o) {
  return new e({ type: "string", ...C(o) });
}
c(Ks, "_string");
function Hs(e, o) {
  return new e({ type: "string", coerce: !0, ...C(o) });
}
c(Hs, "_coercedString");
function uo(e, o) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(uo, "_email");
function pn(e, o) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(pn, "_guid");
function po(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(po, "_uuid");
function mo(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...C(o),
  });
}
c(mo, "_uuidv4");
function go(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...C(o),
  });
}
c(go, "_uuidv6");
function fo(e, o) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...C(o),
  });
}
c(fo, "_uuidv7");
function mn(e, o) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(mn, "_url");
function ho(e, o) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(ho, "_emoji");
function yo(e, o) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(yo, "_nanoid");
function bo(e, o) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(bo, "_cuid");
function vo(e, o) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(vo, "_cuid2");
function So(e, o) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(So, "_ulid");
function _o(e, o) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(_o, "_xid");
function xo(e, o) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(xo, "_ksuid");
function ko(e, o) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(ko, "_ipv4");
function Io(e, o) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Io, "_ipv6");
function Js(e, o) {
  return new e({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Js, "_mac");
function Co(e, o) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Co, "_cidrv4");
function Ro(e, o) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Ro, "_cidrv6");
function Po(e, o) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Po, "_base64");
function To(e, o) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(To, "_base64url");
function wo(e, o) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(wo, "_e164");
function Eo(e, o) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...C(o),
  });
}
c(Eo, "_jwt");
var Ys = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function Xs(e, o) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...C(o),
  });
}
c(Xs, "_isoDateTime");
function Qs(e, o) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...C(o),
  });
}
c(Qs, "_isoDate");
function ec(e, o) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...C(o),
  });
}
c(ec, "_isoTime");
function tc(e, o) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...C(o),
  });
}
c(tc, "_isoDuration");
function nc(e, o) {
  return new e({ type: "number", checks: [], ...C(o) });
}
c(nc, "_number");
function oc(e, o) {
  return new e({ type: "number", coerce: !0, checks: [], ...C(o) });
}
c(oc, "_coercedNumber");
function rc(e, o) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...C(o),
  });
}
c(rc, "_int");
function ic(e, o) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...C(o),
  });
}
c(ic, "_float32");
function ac(e, o) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...C(o),
  });
}
c(ac, "_float64");
function sc(e, o) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...C(o),
  });
}
c(sc, "_int32");
function cc(e, o) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...C(o),
  });
}
c(cc, "_uint32");
function lc(e, o) {
  return new e({ type: "boolean", ...C(o) });
}
c(lc, "_boolean");
function dc(e, o) {
  return new e({ type: "boolean", coerce: !0, ...C(o) });
}
c(dc, "_coercedBoolean");
function uc(e, o) {
  return new e({ type: "bigint", ...C(o) });
}
c(uc, "_bigint");
function pc(e, o) {
  return new e({ type: "bigint", coerce: !0, ...C(o) });
}
c(pc, "_coercedBigint");
function mc(e, o) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...C(o),
  });
}
c(mc, "_int64");
function gc(e, o) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...C(o),
  });
}
c(gc, "_uint64");
function fc(e, o) {
  return new e({ type: "symbol", ...C(o) });
}
c(fc, "_symbol");
function hc(e, o) {
  return new e({ type: "undefined", ...C(o) });
}
c(hc, "_undefined");
function yc(e, o) {
  return new e({ type: "null", ...C(o) });
}
c(yc, "_null");
function bc(e) {
  return new e({ type: "any" });
}
c(bc, "_any");
function vc(e) {
  return new e({ type: "unknown" });
}
c(vc, "_unknown");
function Sc(e, o) {
  return new e({ type: "never", ...C(o) });
}
c(Sc, "_never");
function _c(e, o) {
  return new e({ type: "void", ...C(o) });
}
c(_c, "_void");
function xc(e, o) {
  return new e({ type: "date", ...C(o) });
}
c(xc, "_date");
function kc(e, o) {
  return new e({ type: "date", coerce: !0, ...C(o) });
}
c(kc, "_coercedDate");
function Ic(e, o) {
  return new e({ type: "nan", ...C(o) });
}
c(Ic, "_nan");
function ye(e, o) {
  return new Yn({ check: "less_than", ...C(o), value: e, inclusive: !1 });
}
c(ye, "_lt");
function oe(e, o) {
  return new Yn({ check: "less_than", ...C(o), value: e, inclusive: !0 });
}
c(oe, "_lte");
function be(e, o) {
  return new Xn({ check: "greater_than", ...C(o), value: e, inclusive: !1 });
}
c(be, "_gt");
function K(e, o) {
  return new Xn({ check: "greater_than", ...C(o), value: e, inclusive: !0 });
}
c(K, "_gte");
function Oo(e) {
  return be(0, e);
}
c(Oo, "_positive");
function Ao(e) {
  return ye(0, e);
}
c(Ao, "_negative");
function zo(e) {
  return oe(0, e);
}
c(zo, "_nonpositive");
function Mo(e) {
  return K(0, e);
}
c(Mo, "_nonnegative");
function De(e, o) {
  return new Ci({ check: "multiple_of", ...C(o), value: e });
}
c(De, "_multipleOf");
function Ue(e, o) {
  return new Ti({ check: "max_size", ...C(o), maximum: e });
}
c(Ue, "_maxSize");
function ve(e, o) {
  return new wi({ check: "min_size", ...C(o), minimum: e });
}
c(ve, "_minSize");
function Ge(e, o) {
  return new Ei({ check: "size_equals", ...C(o), size: e });
}
c(Ge, "_size");
function Ke(e, o) {
  return new Oi({ check: "max_length", ...C(o), maximum: e });
}
c(Ke, "_maxLength");
function Ce(e, o) {
  return new Ai({ check: "min_length", ...C(o), minimum: e });
}
c(Ce, "_minLength");
function He(e, o) {
  return new zi({ check: "length_equals", ...C(o), length: e });
}
c(He, "_length");
function pt(e, o) {
  return new Mi({
    check: "string_format",
    format: "regex",
    ...C(o),
    pattern: e,
  });
}
c(pt, "_regex");
function mt(e) {
  return new $i({ check: "string_format", format: "lowercase", ...C(e) });
}
c(mt, "_lowercase");
function gt(e) {
  return new Di({ check: "string_format", format: "uppercase", ...C(e) });
}
c(gt, "_uppercase");
function ft(e, o) {
  return new Ui({
    check: "string_format",
    format: "includes",
    ...C(o),
    includes: e,
  });
}
c(ft, "_includes");
function ht(e, o) {
  return new Ni({
    check: "string_format",
    format: "starts_with",
    ...C(o),
    prefix: e,
  });
}
c(ht, "_startsWith");
function yt(e, o) {
  return new Zi({
    check: "string_format",
    format: "ends_with",
    ...C(o),
    suffix: e,
  });
}
c(yt, "_endsWith");
function $o(e, o, r) {
  return new ji({ check: "property", property: e, schema: o, ...C(r) });
}
c($o, "_property");
function bt(e, o) {
  return new Bi({ check: "mime_type", mime: e, ...C(o) });
}
c(bt, "_mime");
function me(e) {
  return new Li({ check: "overwrite", tx: e });
}
c(me, "_overwrite");
function vt(e) {
  return me((o) => o.normalize(e));
}
c(vt, "_normalize");
function St() {
  return me((e) => e.trim());
}
c(St, "_trim");
function _t() {
  return me((e) => e.toLowerCase());
}
c(_t, "_toLowerCase");
function xt() {
  return me((e) => e.toUpperCase());
}
c(xt, "_toUpperCase");
function kt() {
  return me((e) => jr(e));
}
c(kt, "_slugify");
function Cc(e, o, r) {
  return new e({ type: "array", element: o, ...C(r) });
}
c(Cc, "_array");
function Ab(e, o, r) {
  return new e({ type: "union", options: o, ...C(r) });
}
c(Ab, "_union");
function zb(e, o, r) {
  return new e({ type: "union", options: o, inclusive: !1, ...C(r) });
}
c(zb, "_xor");
function Mb(e, o, r, a) {
  return new e({ type: "union", options: r, discriminator: o, ...C(a) });
}
c(Mb, "_discriminatedUnion");
function $b(e, o, r) {
  return new e({ type: "intersection", left: o, right: r });
}
c($b, "_intersection");
function Db(e, o, r, a) {
  let n = r instanceof w,
    i = n ? a : r,
    s = n ? r : null;
  return new e({ type: "tuple", items: o, rest: s, ...C(i) });
}
c(Db, "_tuple");
function Ub(e, o, r, a) {
  return new e({ type: "record", keyType: o, valueType: r, ...C(a) });
}
c(Ub, "_record");
function Nb(e, o, r, a) {
  return new e({ type: "map", keyType: o, valueType: r, ...C(a) });
}
c(Nb, "_map");
function Zb(e, o, r) {
  return new e({ type: "set", valueType: o, ...C(r) });
}
c(Zb, "_set");
function jb(e, o, r) {
  let a = Array.isArray(o) ? Object.fromEntries(o.map((n) => [n, n])) : o;
  return new e({ type: "enum", entries: a, ...C(r) });
}
c(jb, "_enum");
function Bb(e, o, r) {
  return new e({ type: "enum", entries: o, ...C(r) });
}
c(Bb, "_nativeEnum");
function Lb(e, o, r) {
  return new e({
    type: "literal",
    values: Array.isArray(o) ? o : [o],
    ...C(r),
  });
}
c(Lb, "_literal");
function Rc(e, o) {
  return new e({ type: "file", ...C(o) });
}
c(Rc, "_file");
function Wb(e, o) {
  return new e({ type: "transform", transform: o });
}
c(Wb, "_transform");
function Fb(e, o) {
  return new e({ type: "optional", innerType: o });
}
c(Fb, "_optional");
function qb(e, o) {
  return new e({ type: "nullable", innerType: o });
}
c(qb, "_nullable");
function Vb(e, o, r) {
  return new e({
    type: "default",
    innerType: o,
    get defaultValue() {
      return typeof r == "function" ? r() : Lr(r);
    },
  });
}
c(Vb, "_default");
function Gb(e, o, r) {
  return new e({ type: "nonoptional", innerType: o, ...C(r) });
}
c(Gb, "_nonoptional");
function Kb(e, o) {
  return new e({ type: "success", innerType: o });
}
c(Kb, "_success");
function Hb(e, o, r) {
  return new e({
    type: "catch",
    innerType: o,
    catchValue: typeof r == "function" ? r : () => r,
  });
}
c(Hb, "_catch");
function Jb(e, o, r) {
  return new e({ type: "pipe", in: o, out: r });
}
c(Jb, "_pipe");
function Yb(e, o) {
  return new e({ type: "readonly", innerType: o });
}
c(Yb, "_readonly");
function Xb(e, o, r) {
  return new e({ type: "template_literal", parts: o, ...C(r) });
}
c(Xb, "_templateLiteral");
function Qb(e, o) {
  return new e({ type: "lazy", getter: o });
}
c(Qb, "_lazy");
function ev(e, o) {
  return new e({ type: "promise", innerType: o });
}
c(ev, "_promise");
function Pc(e, o, r) {
  let a = C(r);
  return (
    a.abort ?? (a.abort = !0),
    new e({ type: "custom", check: "custom", fn: o, ...a })
  );
}
c(Pc, "_custom");
function Tc(e, o, r) {
  return new e({ type: "custom", check: "custom", fn: o, ...C(r) });
}
c(Tc, "_refine");
function wc(e) {
  let o = cp(
    (r) => (
      (r.addIssue = (a) => {
        if (typeof a == "string") r.issues.push(it(a, r.value, o._zod.def));
        else {
          let n = a;
          (n.fatal && (n.continue = !1),
            n.code ?? (n.code = "custom"),
            n.input ?? (n.input = r.value),
            n.inst ?? (n.inst = o),
            n.continue ?? (n.continue = !o._zod.def.abort),
            r.issues.push(it(n)));
        }
      }),
      e(r.value, r)
    ),
  );
  return o;
}
c(wc, "_superRefine");
function cp(e, o) {
  let r = new Z({ check: "custom", ...C(o) });
  return ((r._zod.check = e), r);
}
c(cp, "_check");
function Ec(e) {
  let o = new Z({ check: "describe" });
  return (
    (o._zod.onattach = [
      (r) => {
        let a = q.get(r) ?? {};
        q.add(r, { ...a, description: e });
      },
    ]),
    (o._zod.check = () => {}),
    o
  );
}
c(Ec, "describe");
function Oc(e) {
  let o = new Z({ check: "meta" });
  return (
    (o._zod.onattach = [
      (r) => {
        let a = q.get(r) ?? {};
        q.add(r, { ...a, ...e });
      },
    ]),
    (o._zod.check = () => {}),
    o
  );
}
c(Oc, "meta");
function Ac(e, o) {
  let r = C(o),
    a = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
    n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" &&
    ((a = a.map((_) => (typeof _ == "string" ? _.toLowerCase() : _))),
    (n = n.map((_) => (typeof _ == "string" ? _.toLowerCase() : _))));
  let i = new Set(a),
    s = new Set(n),
    l = e.Codec ?? an,
    p = e.Boolean ?? on,
    u = e.String ?? Ve,
    h = new u({ type: "string", error: r.error }),
    b = new p({ type: "boolean", error: r.error }),
    S = new l({
      type: "pipe",
      in: h,
      out: b,
      transform: c((_, z) => {
        let $ = _;
        return (
          r.case !== "sensitive" && ($ = $.toLowerCase()),
          i.has($)
            ? !0
            : s.has($)
              ? !1
              : (z.issues.push({
                  code: "invalid_value",
                  expected: "stringbool",
                  values: [...i, ...s],
                  input: z.value,
                  inst: S,
                  continue: !1,
                }),
                {})
        );
      }, "transform"),
      reverseTransform: c(
        (_, z) => (_ === !0 ? a[0] || "true" : n[0] || "false"),
        "reverseTransform",
      ),
      error: r.error,
    });
  return S;
}
c(Ac, "_stringbool");
function It(e, o, r, a = {}) {
  let n = C(a),
    i = {
      ...C(a),
      check: "string_format",
      type: "string",
      format: o,
      fn: typeof r == "function" ? r : (l) => r.test(l),
      ...n,
    };
  return (r instanceof RegExp && (i.pattern = r), new e(i));
}
c(It, "_stringFormat");
function Ne(e) {
  let o = e?.target ?? "draft-2020-12";
  return (
    o === "draft-4" && (o = "draft-04"),
    o === "draft-7" && (o = "draft-07"),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? q,
      target: o,
      unrepresentable: e?.unrepresentable ?? "throw",
      override: e?.override ?? (() => {}),
      io: e?.io ?? "output",
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? "ref",
      reused: e?.reused ?? "inline",
      external: e?.external ?? void 0,
    }
  );
}
c(Ne, "initializeContext");
function D(e, o, r = { path: [], schemaPath: [] }) {
  var a;
  let n = e._zod.def,
    i = o.seen.get(e);
  if (i)
    return (
      i.count++,
      r.schemaPath.includes(e) && (i.cycle = r.path),
      i.schema
    );
  let s = { schema: {}, count: 1, cycle: void 0, path: r.path };
  o.seen.set(e, s);
  let l = e._zod.toJSONSchema?.();
  if (l) s.schema = l;
  else {
    let h = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(o, s.schema, h);
    else {
      let S = s.schema,
        _ = o.processors[n.type];
      if (!_)
        throw new Error(
          `[toJSONSchema]: Non-representable type encountered: ${n.type}`,
        );
      _(e, o, S, h);
    }
    let b = e._zod.parent;
    b && (s.ref || (s.ref = b), D(b, o, h), (o.seen.get(b).isParent = !0));
  }
  let p = o.metadataRegistry.get(e);
  return (
    p && Object.assign(s.schema, p),
    o.io === "input" &&
      H(e) &&
      (delete s.schema.examples, delete s.schema.default),
    o.io === "input" &&
      s.schema._prefault &&
      ((a = s.schema).default ?? (a.default = s.schema._prefault)),
    delete s.schema._prefault,
    o.seen.get(e).schema
  );
}
c(D, "process");
function Ze(e, o) {
  let r = e.seen.get(o);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let a = new Map();
  for (let s of e.seen.entries()) {
    let l = e.metadataRegistry.get(s[0])?.id;
    if (l) {
      let p = a.get(l);
      if (p && p !== s[0])
        throw new Error(
          `Duplicate schema id "${l}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      a.set(l, s[0]);
    }
  }
  let n = c((s) => {
      let l = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        let b = e.external.registry.get(s[0])?.id,
          S = e.external.uri ?? ((z) => z);
        if (b) return { ref: S(b) };
        let _ = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
        return (
          (s[1].defId = _),
          { defId: _, ref: `${S("__shared")}#/${l}/${_}` }
        );
      }
      if (s[1] === r) return { ref: "#" };
      let u = `#/${l}/`,
        h = s[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: h, ref: u + h };
    }, "makeURI"),
    i = c((s) => {
      if (s[1].schema.$ref) return;
      let l = s[1],
        { ref: p, defId: u } = n(s);
      ((l.def = { ...l.schema }), u && (l.defId = u));
      let h = l.schema;
      for (let b in h) delete h[b];
      h.$ref = p;
    }, "extractToDef");
  if (e.cycles === "throw")
    for (let s of e.seen.entries()) {
      let l = s[1];
      if (l.cycle)
        throw new Error(`Cycle detected: #/${l.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let s of e.seen.entries()) {
    let l = s[1];
    if (o === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      let u = e.external.registry.get(s[0])?.id;
      if (o !== s[0] && u) {
        i(s);
        continue;
      }
    }
    if (e.metadataRegistry.get(s[0])?.id) {
      i(s);
      continue;
    }
    if (l.cycle) {
      i(s);
      continue;
    }
    if (l.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
c(Ze, "extractDefs");
function je(e, o) {
  let r = e.seen.get(o);
  if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let a = c((s) => {
    let l = e.seen.get(s);
    if (l.ref === null) return;
    let p = l.def ?? l.schema,
      u = { ...p },
      h = l.ref;
    if (((l.ref = null), h)) {
      a(h);
      let S = e.seen.get(h),
        _ = S.schema;
      if (
        (_.$ref &&
        (e.target === "draft-07" ||
          e.target === "draft-04" ||
          e.target === "openapi-3.0")
          ? ((p.allOf = p.allOf ?? []), p.allOf.push(_))
          : Object.assign(p, _),
        Object.assign(p, u),
        s._zod.parent === h)
      )
        for (let $ in p) $ === "$ref" || $ === "allOf" || $ in u || delete p[$];
      if (_.$ref && S.def)
        for (let $ in p)
          $ === "$ref" ||
            $ === "allOf" ||
            ($ in S.def &&
              JSON.stringify(p[$]) === JSON.stringify(S.def[$]) &&
              delete p[$]);
    }
    let b = s._zod.parent;
    if (b && b !== h) {
      a(b);
      let S = e.seen.get(b);
      if (S?.schema.$ref && ((p.$ref = S.schema.$ref), S.def))
        for (let _ in p)
          _ === "$ref" ||
            _ === "allOf" ||
            (_ in S.def &&
              JSON.stringify(p[_]) === JSON.stringify(S.def[_]) &&
              delete p[_]);
    }
    e.override({ zodSchema: s, jsonSchema: p, path: l.path ?? [] });
  }, "flattenRef");
  for (let s of [...e.seen.entries()].reverse()) a(s[0]);
  let n = {};
  if (
    (e.target === "draft-2020-12"
      ? (n.$schema = "https://json-schema.org/draft/2020-12/schema")
      : e.target === "draft-07"
        ? (n.$schema = "http://json-schema.org/draft-07/schema#")
        : e.target === "draft-04"
          ? (n.$schema = "http://json-schema.org/draft-04/schema#")
          : e.target,
    e.external?.uri)
  ) {
    let s = e.external.registry.get(o)?.id;
    if (!s) throw new Error("Schema is missing an `id` property");
    n.$id = e.external.uri(s);
  }
  Object.assign(n, r.def ?? r.schema);
  let i = e.external?.defs ?? {};
  for (let s of e.seen.entries()) {
    let l = s[1];
    l.def && l.defId && (i[l.defId] = l.def);
  }
  e.external ||
    (Object.keys(i).length > 0 &&
      (e.target === "draft-2020-12" ? (n.$defs = i) : (n.definitions = i)));
  try {
    let s = JSON.parse(JSON.stringify(n));
    return (
      Object.defineProperty(s, "~standard", {
        value: {
          ...o["~standard"],
          jsonSchema: {
            input: Ct(o, "input", e.processors),
            output: Ct(o, "output", e.processors),
          },
        },
        enumerable: !1,
        writable: !1,
      }),
      s
    );
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
c(je, "finalize");
function H(e, o) {
  let r = o ?? { seen: new Set() };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  let a = e._zod.def;
  if (a.type === "transform") return !0;
  if (a.type === "array") return H(a.element, r);
  if (a.type === "set") return H(a.valueType, r);
  if (a.type === "lazy") return H(a.getter(), r);
  if (
    a.type === "promise" ||
    a.type === "optional" ||
    a.type === "nonoptional" ||
    a.type === "nullable" ||
    a.type === "readonly" ||
    a.type === "default" ||
    a.type === "prefault"
  )
    return H(a.innerType, r);
  if (a.type === "intersection") return H(a.left, r) || H(a.right, r);
  if (a.type === "record" || a.type === "map")
    return H(a.keyType, r) || H(a.valueType, r);
  if (a.type === "pipe") return H(a.in, r) || H(a.out, r);
  if (a.type === "object") {
    for (let n in a.shape) if (H(a.shape[n], r)) return !0;
    return !1;
  }
  if (a.type === "union") {
    for (let n of a.options) if (H(n, r)) return !0;
    return !1;
  }
  if (a.type === "tuple") {
    for (let n of a.items) if (H(n, r)) return !0;
    return !!(a.rest && H(a.rest, r));
  }
  return !1;
}
c(H, "isTransforming");
var zc = c(
    (e, o = {}) =>
      (r) => {
        let a = Ne({ ...r, processors: o });
        return (D(e, a), Ze(a, e), je(a, e));
      },
    "createToJSONSchemaMethod",
  ),
  Ct = c(
    (e, o, r = {}) =>
      (a) => {
        let { libraryOptions: n, target: i } = a ?? {},
          s = Ne({ ...(n ?? {}), target: i, io: o, processors: r });
        return (D(e, s), Ze(s, e), je(s, e));
      },
    "createStandardJSONSchemaMethod",
  );
var tv = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: "",
  },
  Mc = c((e, o, r, a) => {
    let n = r;
    n.type = "string";
    let {
      minimum: i,
      maximum: s,
      format: l,
      patterns: p,
      contentEncoding: u,
    } = e._zod.bag;
    if (
      (typeof i == "number" && (n.minLength = i),
      typeof s == "number" && (n.maxLength = s),
      l &&
        ((n.format = tv[l] ?? l),
        n.format === "" && delete n.format,
        l === "time" && delete n.format),
      u && (n.contentEncoding = u),
      p && p.size > 0)
    ) {
      let h = [...p];
      h.length === 1
        ? (n.pattern = h[0].source)
        : h.length > 1 &&
          (n.allOf = [
            ...h.map((b) => ({
              ...(o.target === "draft-07" ||
              o.target === "draft-04" ||
              o.target === "openapi-3.0"
                ? { type: "string" }
                : {}),
              pattern: b.source,
            })),
          ]);
    }
  }, "stringProcessor"),
  $c = c((e, o, r, a) => {
    let n = r,
      {
        minimum: i,
        maximum: s,
        format: l,
        multipleOf: p,
        exclusiveMaximum: u,
        exclusiveMinimum: h,
      } = e._zod.bag;
    (typeof l == "string" && l.includes("int")
      ? (n.type = "integer")
      : (n.type = "number"),
      typeof h == "number" &&
        (o.target === "draft-04" || o.target === "openapi-3.0"
          ? ((n.minimum = h), (n.exclusiveMinimum = !0))
          : (n.exclusiveMinimum = h)),
      typeof i == "number" &&
        ((n.minimum = i),
        typeof h == "number" &&
          o.target !== "draft-04" &&
          (h >= i ? delete n.minimum : delete n.exclusiveMinimum)),
      typeof u == "number" &&
        (o.target === "draft-04" || o.target === "openapi-3.0"
          ? ((n.maximum = u), (n.exclusiveMaximum = !0))
          : (n.exclusiveMaximum = u)),
      typeof s == "number" &&
        ((n.maximum = s),
        typeof u == "number" &&
          o.target !== "draft-04" &&
          (u <= s ? delete n.maximum : delete n.exclusiveMaximum)),
      typeof p == "number" && (n.multipleOf = p));
  }, "numberProcessor"),
  Dc = c((e, o, r, a) => {
    r.type = "boolean";
  }, "booleanProcessor"),
  Uc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("BigInt cannot be represented in JSON Schema");
  }, "bigintProcessor"),
  Nc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Symbols cannot be represented in JSON Schema");
  }, "symbolProcessor"),
  Zc = c((e, o, r, a) => {
    o.target === "openapi-3.0"
      ? ((r.type = "string"), (r.nullable = !0), (r.enum = [null]))
      : (r.type = "null");
  }, "nullProcessor"),
  jc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Undefined cannot be represented in JSON Schema");
  }, "undefinedProcessor"),
  Bc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Void cannot be represented in JSON Schema");
  }, "voidProcessor"),
  Lc = c((e, o, r, a) => {
    r.not = {};
  }, "neverProcessor"),
  Wc = c((e, o, r, a) => {}, "anyProcessor"),
  Fc = c((e, o, r, a) => {}, "unknownProcessor"),
  qc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Date cannot be represented in JSON Schema");
  }, "dateProcessor"),
  Vc = c((e, o, r, a) => {
    let n = e._zod.def,
      i = Vt(n.entries);
    (i.every((s) => typeof s == "number") && (r.type = "number"),
      i.every((s) => typeof s == "string") && (r.type = "string"),
      (r.enum = i));
  }, "enumProcessor"),
  Gc = c((e, o, r, a) => {
    let n = e._zod.def,
      i = [];
    for (let s of n.values)
      if (s === void 0) {
        if (o.unrepresentable === "throw")
          throw new Error(
            "Literal `undefined` cannot be represented in JSON Schema",
          );
      } else if (typeof s == "bigint") {
        if (o.unrepresentable === "throw")
          throw new Error(
            "BigInt literals cannot be represented in JSON Schema",
          );
        i.push(Number(s));
      } else i.push(s);
    if (i.length !== 0)
      if (i.length === 1) {
        let s = i[0];
        ((r.type = s === null ? "null" : typeof s),
          o.target === "draft-04" || o.target === "openapi-3.0"
            ? (r.enum = [s])
            : (r.const = s));
      } else
        (i.every((s) => typeof s == "number") && (r.type = "number"),
          i.every((s) => typeof s == "string") && (r.type = "string"),
          i.every((s) => typeof s == "boolean") && (r.type = "boolean"),
          i.every((s) => s === null) && (r.type = "null"),
          (r.enum = i));
  }, "literalProcessor"),
  Kc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("NaN cannot be represented in JSON Schema");
  }, "nanProcessor"),
  Hc = c((e, o, r, a) => {
    let n = r,
      i = e._zod.pattern;
    if (!i) throw new Error("Pattern not found in template literal");
    ((n.type = "string"), (n.pattern = i.source));
  }, "templateLiteralProcessor"),
  Jc = c((e, o, r, a) => {
    let n = r,
      i = { type: "string", format: "binary", contentEncoding: "binary" },
      { minimum: s, maximum: l, mime: p } = e._zod.bag;
    (s !== void 0 && (i.minLength = s),
      l !== void 0 && (i.maxLength = l),
      p
        ? p.length === 1
          ? ((i.contentMediaType = p[0]), Object.assign(n, i))
          : (Object.assign(n, i),
            (n.anyOf = p.map((u) => ({ contentMediaType: u }))))
        : Object.assign(n, i));
  }, "fileProcessor"),
  Yc = c((e, o, r, a) => {
    r.type = "boolean";
  }, "successProcessor"),
  Xc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Custom types cannot be represented in JSON Schema");
  }, "customProcessor"),
  Qc = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Function types cannot be represented in JSON Schema");
  }, "functionProcessor"),
  el = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Transforms cannot be represented in JSON Schema");
  }, "transformProcessor"),
  tl = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Map cannot be represented in JSON Schema");
  }, "mapProcessor"),
  nl = c((e, o, r, a) => {
    if (o.unrepresentable === "throw")
      throw new Error("Set cannot be represented in JSON Schema");
  }, "setProcessor"),
  ol = c((e, o, r, a) => {
    let n = r,
      i = e._zod.def,
      { minimum: s, maximum: l } = e._zod.bag;
    (typeof s == "number" && (n.minItems = s),
      typeof l == "number" && (n.maxItems = l),
      (n.type = "array"),
      (n.items = D(i.element, o, { ...a, path: [...a.path, "items"] })));
  }, "arrayProcessor"),
  rl = c((e, o, r, a) => {
    let n = r,
      i = e._zod.def;
    ((n.type = "object"), (n.properties = {}));
    let s = i.shape;
    for (let u in s)
      n.properties[u] = D(s[u], o, {
        ...a,
        path: [...a.path, "properties", u],
      });
    let l = new Set(Object.keys(s)),
      p = new Set(
        [...l].filter((u) => {
          let h = i.shape[u]._zod;
          return o.io === "input" ? h.optin === void 0 : h.optout === void 0;
        }),
      );
    (p.size > 0 && (n.required = Array.from(p)),
      i.catchall?._zod.def.type === "never"
        ? (n.additionalProperties = !1)
        : i.catchall
          ? i.catchall &&
            (n.additionalProperties = D(i.catchall, o, {
              ...a,
              path: [...a.path, "additionalProperties"],
            }))
          : o.io === "output" && (n.additionalProperties = !1));
  }, "objectProcessor"),
  Uo = c((e, o, r, a) => {
    let n = e._zod.def,
      i = n.inclusive === !1,
      s = n.options.map((l, p) =>
        D(l, o, { ...a, path: [...a.path, i ? "oneOf" : "anyOf", p] }),
      );
    i ? (r.oneOf = s) : (r.anyOf = s);
  }, "unionProcessor"),
  il = c((e, o, r, a) => {
    let n = e._zod.def,
      i = D(n.left, o, { ...a, path: [...a.path, "allOf", 0] }),
      s = D(n.right, o, { ...a, path: [...a.path, "allOf", 1] }),
      l = c(
        (u) => "allOf" in u && Object.keys(u).length === 1,
        "isSimpleIntersection",
      ),
      p = [...(l(i) ? i.allOf : [i]), ...(l(s) ? s.allOf : [s])];
    r.allOf = p;
  }, "intersectionProcessor"),
  al = c((e, o, r, a) => {
    let n = r,
      i = e._zod.def;
    n.type = "array";
    let s = o.target === "draft-2020-12" ? "prefixItems" : "items",
      l =
        o.target === "draft-2020-12" || o.target === "openapi-3.0"
          ? "items"
          : "additionalItems",
      p = i.items.map((S, _) => D(S, o, { ...a, path: [...a.path, s, _] })),
      u = i.rest
        ? D(i.rest, o, {
            ...a,
            path: [
              ...a.path,
              l,
              ...(o.target === "openapi-3.0" ? [i.items.length] : []),
            ],
          })
        : null;
    o.target === "draft-2020-12"
      ? ((n.prefixItems = p), u && (n.items = u))
      : o.target === "openapi-3.0"
        ? ((n.items = { anyOf: p }),
          u && n.items.anyOf.push(u),
          (n.minItems = p.length),
          u || (n.maxItems = p.length))
        : ((n.items = p), u && (n.additionalItems = u));
    let { minimum: h, maximum: b } = e._zod.bag;
    (typeof h == "number" && (n.minItems = h),
      typeof b == "number" && (n.maxItems = b));
  }, "tupleProcessor"),
  sl = c((e, o, r, a) => {
    let n = r,
      i = e._zod.def;
    n.type = "object";
    let s = i.keyType,
      p = s._zod.bag?.patterns;
    if (i.mode === "loose" && p && p.size > 0) {
      let h = D(i.valueType, o, {
        ...a,
        path: [...a.path, "patternProperties", "*"],
      });
      n.patternProperties = {};
      for (let b of p) n.patternProperties[b.source] = h;
    } else
      ((o.target === "draft-07" || o.target === "draft-2020-12") &&
        (n.propertyNames = D(i.keyType, o, {
          ...a,
          path: [...a.path, "propertyNames"],
        })),
        (n.additionalProperties = D(i.valueType, o, {
          ...a,
          path: [...a.path, "additionalProperties"],
        })));
    let u = s._zod.values;
    if (u) {
      let h = [...u].filter(
        (b) => typeof b == "string" || typeof b == "number",
      );
      h.length > 0 && (n.required = h);
    }
  }, "recordProcessor"),
  cl = c((e, o, r, a) => {
    let n = e._zod.def,
      i = D(n.innerType, o, a),
      s = o.seen.get(e);
    o.target === "openapi-3.0"
      ? ((s.ref = n.innerType), (r.nullable = !0))
      : (r.anyOf = [i, { type: "null" }]);
  }, "nullableProcessor"),
  ll = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    i.ref = n.innerType;
  }, "nonoptionalProcessor"),
  dl = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    ((i.ref = n.innerType),
      (r.default = JSON.parse(JSON.stringify(n.defaultValue))));
  }, "defaultProcessor"),
  ul = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    ((i.ref = n.innerType),
      o.io === "input" &&
        (r._prefault = JSON.parse(JSON.stringify(n.defaultValue))));
  }, "prefaultProcessor"),
  pl = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    i.ref = n.innerType;
    let s;
    try {
      s = n.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    r.default = s;
  }, "catchProcessor"),
  ml = c((e, o, r, a) => {
    let n = e._zod.def,
      i =
        o.io === "input"
          ? n.in._zod.def.type === "transform"
            ? n.out
            : n.in
          : n.out;
    D(i, o, a);
    let s = o.seen.get(e);
    s.ref = i;
  }, "pipeProcessor"),
  gl = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    ((i.ref = n.innerType), (r.readOnly = !0));
  }, "readonlyProcessor"),
  fl = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    i.ref = n.innerType;
  }, "promiseProcessor"),
  No = c((e, o, r, a) => {
    let n = e._zod.def;
    D(n.innerType, o, a);
    let i = o.seen.get(e);
    i.ref = n.innerType;
  }, "optionalProcessor"),
  hl = c((e, o, r, a) => {
    let n = e._zod.innerType;
    D(n, o, a);
    let i = o.seen.get(e);
    i.ref = n;
  }, "lazyProcessor"),
  Do = {
    string: Mc,
    number: $c,
    boolean: Dc,
    bigint: Uc,
    symbol: Nc,
    null: Zc,
    undefined: jc,
    void: Bc,
    never: Lc,
    any: Wc,
    unknown: Fc,
    date: qc,
    enum: Vc,
    literal: Gc,
    nan: Kc,
    template_literal: Hc,
    file: Jc,
    success: Yc,
    custom: Xc,
    function: Qc,
    transform: el,
    map: tl,
    set: nl,
    array: ol,
    object: rl,
    union: Uo,
    intersection: il,
    tuple: al,
    record: sl,
    nullable: cl,
    nonoptional: ll,
    default: dl,
    prefault: ul,
    catch: pl,
    pipe: ml,
    readonly: gl,
    promise: fl,
    optional: No,
    lazy: hl,
  };
function Zo(e, o) {
  if ("_idmap" in e) {
    let a = e,
      n = Ne({ ...o, processors: Do }),
      i = {};
    for (let p of a._idmap.entries()) {
      let [u, h] = p;
      D(h, n);
    }
    let s = {},
      l = { registry: a, uri: o?.uri, defs: i };
    n.external = l;
    for (let p of a._idmap.entries()) {
      let [u, h] = p;
      (Ze(n, h), (s[u] = je(n, h)));
    }
    if (Object.keys(i).length > 0) {
      let p = n.target === "draft-2020-12" ? "$defs" : "definitions";
      s.__shared = { [p]: i };
    }
    return { schemas: s };
  }
  let r = Ne({ ...o, processors: Do });
  return (D(e, r), Ze(r, e), je(r, e));
}
c(Zo, "toJSONSchema");
var jo = class {
  static {
    c(this, "JSONSchemaGenerator");
  }
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(o) {
    this.ctx.counter = o;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(o) {
    let r = o?.target ?? "draft-2020-12";
    (r === "draft-4" && (r = "draft-04"),
      r === "draft-7" && (r = "draft-07"),
      (this.ctx = Ne({
        processors: Do,
        target: r,
        ...(o?.metadata && { metadata: o.metadata }),
        ...(o?.unrepresentable && { unrepresentable: o.unrepresentable }),
        ...(o?.override && { override: o.override }),
        ...(o?.io && { io: o.io }),
      })));
  }
  process(o, r = { path: [], schemaPath: [] }) {
    return D(o, this.ctx, r);
  }
  emit(o, r) {
    (r &&
      (r.cycles && (this.ctx.cycles = r.cycles),
      r.reused && (this.ctx.reused = r.reused),
      r.external && (this.ctx.external = r.external)),
      Ze(this.ctx, o));
    let a = je(this.ctx, o),
      { "~standard": n, ...i } = a;
    return i;
  }
};
var lp = {};
var gn = {};
ke(gn, {
  ZodAny: () => jl,
  ZodArray: () => Fl,
  ZodBase64: () => sr,
  ZodBase64URL: () => cr,
  ZodBigInt: () => At,
  ZodBigIntFormat: () => ur,
  ZodBoolean: () => Ot,
  ZodCIDRv4: () => ir,
  ZodCIDRv6: () => ar,
  ZodCUID: () => Xo,
  ZodCUID2: () => Qo,
  ZodCatch: () => pd,
  ZodCodec: () => vr,
  ZodCustom: () => Cn,
  ZodCustomStringFormat: () => wt,
  ZodDate: () => Sn,
  ZodDefault: () => ad,
  ZodDiscriminatedUnion: () => Vl,
  ZodE164: () => lr,
  ZodEmail: () => Ho,
  ZodEmoji: () => Jo,
  ZodEnum: () => Pt,
  ZodExactOptional: () => od,
  ZodFile: () => td,
  ZodFunction: () => _d,
  ZodGUID: () => fn,
  ZodIPv4: () => or,
  ZodIPv6: () => rr,
  ZodIntersection: () => Gl,
  ZodJWT: () => dr,
  ZodKSUID: () => nr,
  ZodLazy: () => bd,
  ZodLiteral: () => ed,
  ZodMAC: () => zl,
  ZodMap: () => Xl,
  ZodNaN: () => gd,
  ZodNanoID: () => Yo,
  ZodNever: () => Ll,
  ZodNonOptional: () => yr,
  ZodNull: () => Nl,
  ZodNullable: () => id,
  ZodNumber: () => Et,
  ZodNumberFormat: () => Ye,
  ZodObject: () => xn,
  ZodOptional: () => hr,
  ZodPipe: () => br,
  ZodPrefault: () => cd,
  ZodPromise: () => Sd,
  ZodReadonly: () => fd,
  ZodRecord: () => In,
  ZodSet: () => Ql,
  ZodString: () => Tt,
  ZodStringFormat: () => N,
  ZodSuccess: () => ud,
  ZodSymbol: () => Dl,
  ZodTemplateLiteral: () => yd,
  ZodTransform: () => nd,
  ZodTuple: () => Hl,
  ZodType: () => E,
  ZodULID: () => er,
  ZodURL: () => vn,
  ZodUUID: () => Se,
  ZodUndefined: () => Ul,
  ZodUnion: () => kn,
  ZodUnknown: () => Bl,
  ZodVoid: () => Wl,
  ZodXID: () => tr,
  ZodXor: () => ql,
  _ZodString: () => Ko,
  _default: () => sd,
  _function: () => hm,
  any: () => Kp,
  array: () => _n,
  base64: () => Op,
  base64url: () => Ap,
  bigint: () => Wp,
  boolean: () => $l,
  catch: () => md,
  check: () => ym,
  cidrv4: () => wp,
  cidrv6: () => Ep,
  codec: () => mm,
  cuid: () => _p,
  cuid2: () => xp,
  custom: () => bm,
  date: () => Jp,
  describe: () => vm,
  discriminatedUnion: () => nm,
  e164: () => zp,
  email: () => up,
  emoji: () => vp,
  enum: () => gr,
  exactOptional: () => rd,
  file: () => lm,
  float32: () => Zp,
  float64: () => jp,
  function: () => hm,
  guid: () => pp,
  hash: () => Np,
  hex: () => Up,
  hostname: () => Dp,
  httpUrl: () => bp,
  instanceof: () => _m,
  int: () => Go,
  int32: () => Bp,
  int64: () => Fp,
  intersection: () => Kl,
  ipv4: () => Rp,
  ipv6: () => Tp,
  json: () => km,
  jwt: () => Mp,
  keyof: () => Yp,
  ksuid: () => Cp,
  lazy: () => vd,
  literal: () => cm,
  looseObject: () => em,
  looseRecord: () => rm,
  mac: () => Pp,
  map: () => im,
  meta: () => Sm,
  nan: () => pm,
  nanoid: () => Sp,
  nativeEnum: () => sm,
  never: () => pr,
  nonoptional: () => dd,
  null: () => Zl,
  nullable: () => yn,
  nullish: () => dm,
  number: () => Ml,
  object: () => Xp,
  optional: () => hn,
  partialRecord: () => om,
  pipe: () => bn,
  prefault: () => ld,
  preprocess: () => Im,
  promise: () => fm,
  readonly: () => hd,
  record: () => Yl,
  refine: () => xd,
  set: () => am,
  strictObject: () => Qp,
  string: () => Vo,
  stringFormat: () => $p,
  stringbool: () => xm,
  success: () => um,
  superRefine: () => kd,
  symbol: () => Vp,
  templateLiteral: () => gm,
  transform: () => fr,
  tuple: () => Jl,
  uint32: () => Lp,
  uint64: () => qp,
  ulid: () => kp,
  undefined: () => Gp,
  union: () => mr,
  unknown: () => Je,
  url: () => yp,
  uuid: () => mp,
  uuidv4: () => gp,
  uuidv6: () => fp,
  uuidv7: () => hp,
  void: () => Hp,
  xid: () => Ip,
  xor: () => tm,
});
var Bo = {};
ke(Bo, {
  endsWith: () => yt,
  gt: () => be,
  gte: () => K,
  includes: () => ft,
  length: () => He,
  lowercase: () => mt,
  lt: () => ye,
  lte: () => oe,
  maxLength: () => Ke,
  maxSize: () => Ue,
  mime: () => bt,
  minLength: () => Ce,
  minSize: () => ve,
  multipleOf: () => De,
  negative: () => Ao,
  nonnegative: () => Mo,
  nonpositive: () => zo,
  normalize: () => vt,
  overwrite: () => me,
  positive: () => Oo,
  property: () => $o,
  regex: () => pt,
  size: () => Ge,
  slugify: () => kt,
  startsWith: () => ht,
  toLowerCase: () => _t,
  toUpperCase: () => xt,
  trim: () => St,
  uppercase: () => gt,
});
var Rt = {};
ke(Rt, {
  ZodISODate: () => Wo,
  ZodISODateTime: () => Lo,
  ZodISODuration: () => qo,
  ZodISOTime: () => Fo,
  date: () => bl,
  datetime: () => yl,
  duration: () => Sl,
  time: () => vl,
});
var Lo = f("ZodISODateTime", (e, o) => {
  (na.init(e, o), N.init(e, o));
});
function yl(e) {
  return Xs(Lo, e);
}
c(yl, "datetime");
var Wo = f("ZodISODate", (e, o) => {
  (oa.init(e, o), N.init(e, o));
});
function bl(e) {
  return Qs(Wo, e);
}
c(bl, "date");
var Fo = f("ZodISOTime", (e, o) => {
  (ra.init(e, o), N.init(e, o));
});
function vl(e) {
  return ec(Fo, e);
}
c(vl, "time");
var qo = f("ZodISODuration", (e, o) => {
  (ia.init(e, o), N.init(e, o));
});
function Sl(e) {
  return tc(qo, e);
}
c(Sl, "duration");
var dp = c((e, o) => {
    (Yt.init(e, o),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: c((r) => Qt(e, r), "value") },
        flatten: { value: c((r) => Xt(e, r), "value") },
        addIssue: {
          value: c((r) => {
            (e.issues.push(r), (e.message = JSON.stringify(e.issues, ot, 2)));
          }, "value"),
        },
        addIssues: {
          value: c((r) => {
            (e.issues.push(...r),
              (e.message = JSON.stringify(e.issues, ot, 2)));
          }, "value"),
        },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  }, "initializer"),
  ov = f("ZodError", dp),
  ee = f("ZodError", dp, { Parent: Error });
var _l = at(ee),
  xl = st(ee),
  kl = ct(ee),
  Il = lt(ee),
  Cl = Bn(ee),
  Rl = Ln(ee),
  Pl = Wn(ee),
  Tl = Fn(ee),
  wl = qn(ee),
  El = Vn(ee),
  Ol = Gn(ee),
  Al = Kn(ee);
var E = f(
    "ZodType",
    (e, o) => (
      w.init(e, o),
      Object.assign(e["~standard"], {
        jsonSchema: { input: Ct(e, "input"), output: Ct(e, "output") },
      }),
      (e.toJSONSchema = zc(e, {})),
      (e.def = o),
      (e.type = o.type),
      Object.defineProperty(e, "_def", { value: o }),
      (e.check = (...r) =>
        e.clone(
          I.mergeDefs(o, {
            checks: [
              ...(o.checks ?? []),
              ...r.map((a) =>
                typeof a == "function"
                  ? {
                      _zod: {
                        check: a,
                        def: { check: "custom" },
                        onattach: [],
                      },
                    }
                  : a,
              ),
            ],
          }),
          { parent: !0 },
        )),
      (e.with = e.check),
      (e.clone = (r, a) => G(e, r, a)),
      (e.brand = () => e),
      (e.register = (r, a) => (r.add(e, a), e)),
      (e.parse = (r, a) => _l(e, r, a, { callee: e.parse })),
      (e.safeParse = (r, a) => kl(e, r, a)),
      (e.parseAsync = async (r, a) => xl(e, r, a, { callee: e.parseAsync })),
      (e.safeParseAsync = async (r, a) => Il(e, r, a)),
      (e.spa = e.safeParseAsync),
      (e.encode = (r, a) => Cl(e, r, a)),
      (e.decode = (r, a) => Rl(e, r, a)),
      (e.encodeAsync = async (r, a) => Pl(e, r, a)),
      (e.decodeAsync = async (r, a) => Tl(e, r, a)),
      (e.safeEncode = (r, a) => wl(e, r, a)),
      (e.safeDecode = (r, a) => El(e, r, a)),
      (e.safeEncodeAsync = async (r, a) => Ol(e, r, a)),
      (e.safeDecodeAsync = async (r, a) => Al(e, r, a)),
      (e.refine = (r, a) => e.check(xd(r, a))),
      (e.superRefine = (r) => e.check(kd(r))),
      (e.overwrite = (r) => e.check(me(r))),
      (e.optional = () => hn(e)),
      (e.exactOptional = () => rd(e)),
      (e.nullable = () => yn(e)),
      (e.nullish = () => hn(yn(e))),
      (e.nonoptional = (r) => dd(e, r)),
      (e.array = () => _n(e)),
      (e.or = (r) => mr([e, r])),
      (e.and = (r) => Kl(e, r)),
      (e.transform = (r) => bn(e, fr(r))),
      (e.default = (r) => sd(e, r)),
      (e.prefault = (r) => ld(e, r)),
      (e.catch = (r) => md(e, r)),
      (e.pipe = (r) => bn(e, r)),
      (e.readonly = () => hd(e)),
      (e.describe = (r) => {
        let a = e.clone();
        return (q.add(a, { description: r }), a);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return q.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...r) => {
        if (r.length === 0) return q.get(e);
        let a = e.clone();
        return (q.add(a, r[0]), a);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      (e.apply = (r) => r(e)),
      e
    ),
  ),
  Ko = f("_ZodString", (e, o) => {
    (Ve.init(e, o),
      E.init(e, o),
      (e._zod.processJSONSchema = (a, n, i) => Mc(e, a, n, i)));
    let r = e._zod.bag;
    ((e.format = r.format ?? null),
      (e.minLength = r.minimum ?? null),
      (e.maxLength = r.maximum ?? null),
      (e.regex = (...a) => e.check(pt(...a))),
      (e.includes = (...a) => e.check(ft(...a))),
      (e.startsWith = (...a) => e.check(ht(...a))),
      (e.endsWith = (...a) => e.check(yt(...a))),
      (e.min = (...a) => e.check(Ce(...a))),
      (e.max = (...a) => e.check(Ke(...a))),
      (e.length = (...a) => e.check(He(...a))),
      (e.nonempty = (...a) => e.check(Ce(1, ...a))),
      (e.lowercase = (a) => e.check(mt(a))),
      (e.uppercase = (a) => e.check(gt(a))),
      (e.trim = () => e.check(St())),
      (e.normalize = (...a) => e.check(vt(...a))),
      (e.toLowerCase = () => e.check(_t())),
      (e.toUpperCase = () => e.check(xt())),
      (e.slugify = () => e.check(kt())));
  }),
  Tt = f("ZodString", (e, o) => {
    (Ve.init(e, o),
      Ko.init(e, o),
      (e.email = (r) => e.check(uo(Ho, r))),
      (e.url = (r) => e.check(mn(vn, r))),
      (e.jwt = (r) => e.check(Eo(dr, r))),
      (e.emoji = (r) => e.check(ho(Jo, r))),
      (e.guid = (r) => e.check(pn(fn, r))),
      (e.uuid = (r) => e.check(po(Se, r))),
      (e.uuidv4 = (r) => e.check(mo(Se, r))),
      (e.uuidv6 = (r) => e.check(go(Se, r))),
      (e.uuidv7 = (r) => e.check(fo(Se, r))),
      (e.nanoid = (r) => e.check(yo(Yo, r))),
      (e.guid = (r) => e.check(pn(fn, r))),
      (e.cuid = (r) => e.check(bo(Xo, r))),
      (e.cuid2 = (r) => e.check(vo(Qo, r))),
      (e.ulid = (r) => e.check(So(er, r))),
      (e.base64 = (r) => e.check(Po(sr, r))),
      (e.base64url = (r) => e.check(To(cr, r))),
      (e.xid = (r) => e.check(_o(tr, r))),
      (e.ksuid = (r) => e.check(xo(nr, r))),
      (e.ipv4 = (r) => e.check(ko(or, r))),
      (e.ipv6 = (r) => e.check(Io(rr, r))),
      (e.cidrv4 = (r) => e.check(Co(ir, r))),
      (e.cidrv6 = (r) => e.check(Ro(ar, r))),
      (e.e164 = (r) => e.check(wo(lr, r))),
      (e.datetime = (r) => e.check(yl(r))),
      (e.date = (r) => e.check(bl(r))),
      (e.time = (r) => e.check(vl(r))),
      (e.duration = (r) => e.check(Sl(r))));
  });
function Vo(e) {
  return Ks(Tt, e);
}
c(Vo, "string");
var N = f("ZodStringFormat", (e, o) => {
    (U.init(e, o), Ko.init(e, o));
  }),
  Ho = f("ZodEmail", (e, o) => {
    (Gi.init(e, o), N.init(e, o));
  });
function up(e) {
  return uo(Ho, e);
}
c(up, "email");
var fn = f("ZodGUID", (e, o) => {
  (qi.init(e, o), N.init(e, o));
});
function pp(e) {
  return pn(fn, e);
}
c(pp, "guid");
var Se = f("ZodUUID", (e, o) => {
  (Vi.init(e, o), N.init(e, o));
});
function mp(e) {
  return po(Se, e);
}
c(mp, "uuid");
function gp(e) {
  return mo(Se, e);
}
c(gp, "uuidv4");
function fp(e) {
  return go(Se, e);
}
c(fp, "uuidv6");
function hp(e) {
  return fo(Se, e);
}
c(hp, "uuidv7");
var vn = f("ZodURL", (e, o) => {
  (Ki.init(e, o), N.init(e, o));
});
function yp(e) {
  return mn(vn, e);
}
c(yp, "url");
function bp(e) {
  return mn(vn, {
    protocol: /^https?$/,
    hostname: de.domain,
    ...I.normalizeParams(e),
  });
}
c(bp, "httpUrl");
var Jo = f("ZodEmoji", (e, o) => {
  (Hi.init(e, o), N.init(e, o));
});
function vp(e) {
  return ho(Jo, e);
}
c(vp, "emoji");
var Yo = f("ZodNanoID", (e, o) => {
  (Ji.init(e, o), N.init(e, o));
});
function Sp(e) {
  return yo(Yo, e);
}
c(Sp, "nanoid");
var Xo = f("ZodCUID", (e, o) => {
  (Yi.init(e, o), N.init(e, o));
});
function _p(e) {
  return bo(Xo, e);
}
c(_p, "cuid");
var Qo = f("ZodCUID2", (e, o) => {
  (Xi.init(e, o), N.init(e, o));
});
function xp(e) {
  return vo(Qo, e);
}
c(xp, "cuid2");
var er = f("ZodULID", (e, o) => {
  (Qi.init(e, o), N.init(e, o));
});
function kp(e) {
  return So(er, e);
}
c(kp, "ulid");
var tr = f("ZodXID", (e, o) => {
  (ea.init(e, o), N.init(e, o));
});
function Ip(e) {
  return _o(tr, e);
}
c(Ip, "xid");
var nr = f("ZodKSUID", (e, o) => {
  (ta.init(e, o), N.init(e, o));
});
function Cp(e) {
  return xo(nr, e);
}
c(Cp, "ksuid");
var or = f("ZodIPv4", (e, o) => {
  (aa.init(e, o), N.init(e, o));
});
function Rp(e) {
  return ko(or, e);
}
c(Rp, "ipv4");
var zl = f("ZodMAC", (e, o) => {
  (ca.init(e, o), N.init(e, o));
});
function Pp(e) {
  return Js(zl, e);
}
c(Pp, "mac");
var rr = f("ZodIPv6", (e, o) => {
  (sa.init(e, o), N.init(e, o));
});
function Tp(e) {
  return Io(rr, e);
}
c(Tp, "ipv6");
var ir = f("ZodCIDRv4", (e, o) => {
  (la.init(e, o), N.init(e, o));
});
function wp(e) {
  return Co(ir, e);
}
c(wp, "cidrv4");
var ar = f("ZodCIDRv6", (e, o) => {
  (da.init(e, o), N.init(e, o));
});
function Ep(e) {
  return Ro(ar, e);
}
c(Ep, "cidrv6");
var sr = f("ZodBase64", (e, o) => {
  (pa.init(e, o), N.init(e, o));
});
function Op(e) {
  return Po(sr, e);
}
c(Op, "base64");
var cr = f("ZodBase64URL", (e, o) => {
  (ma.init(e, o), N.init(e, o));
});
function Ap(e) {
  return To(cr, e);
}
c(Ap, "base64url");
var lr = f("ZodE164", (e, o) => {
  (ga.init(e, o), N.init(e, o));
});
function zp(e) {
  return wo(lr, e);
}
c(zp, "e164");
var dr = f("ZodJWT", (e, o) => {
  (fa.init(e, o), N.init(e, o));
});
function Mp(e) {
  return Eo(dr, e);
}
c(Mp, "jwt");
var wt = f("ZodCustomStringFormat", (e, o) => {
  (ha.init(e, o), N.init(e, o));
});
function $p(e, o, r = {}) {
  return It(wt, e, o, r);
}
c($p, "stringFormat");
function Dp(e) {
  return It(wt, "hostname", de.hostname, e);
}
c(Dp, "hostname");
function Up(e) {
  return It(wt, "hex", de.hex, e);
}
c(Up, "hex");
function Np(e, o) {
  let r = o?.enc ?? "hex",
    a = `${e}_${r}`,
    n = de[a];
  if (!n) throw new Error(`Unrecognized hash format: ${a}`);
  return It(wt, a, n, o);
}
c(Np, "hash");
var Et = f("ZodNumber", (e, o) => {
  (ro.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (a, n, i) => $c(e, a, n, i)),
    (e.gt = (a, n) => e.check(be(a, n))),
    (e.gte = (a, n) => e.check(K(a, n))),
    (e.min = (a, n) => e.check(K(a, n))),
    (e.lt = (a, n) => e.check(ye(a, n))),
    (e.lte = (a, n) => e.check(oe(a, n))),
    (e.max = (a, n) => e.check(oe(a, n))),
    (e.int = (a) => e.check(Go(a))),
    (e.safe = (a) => e.check(Go(a))),
    (e.positive = (a) => e.check(be(0, a))),
    (e.nonnegative = (a) => e.check(K(0, a))),
    (e.negative = (a) => e.check(ye(0, a))),
    (e.nonpositive = (a) => e.check(oe(0, a))),
    (e.multipleOf = (a, n) => e.check(De(a, n))),
    (e.step = (a, n) => e.check(De(a, n))),
    (e.finite = () => e));
  let r = e._zod.bag;
  ((e.minValue =
    Math.max(
      r.minimum ?? Number.NEGATIVE_INFINITY,
      r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        r.maximum ?? Number.POSITIVE_INFINITY,
        r.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt =
      (r.format ?? "").includes("int") ||
      Number.isSafeInteger(r.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = r.format ?? null));
});
function Ml(e) {
  return nc(Et, e);
}
c(Ml, "number");
var Ye = f("ZodNumberFormat", (e, o) => {
  (ya.init(e, o), Et.init(e, o));
});
function Go(e) {
  return rc(Ye, e);
}
c(Go, "int");
function Zp(e) {
  return ic(Ye, e);
}
c(Zp, "float32");
function jp(e) {
  return ac(Ye, e);
}
c(jp, "float64");
function Bp(e) {
  return sc(Ye, e);
}
c(Bp, "int32");
function Lp(e) {
  return cc(Ye, e);
}
c(Lp, "uint32");
var Ot = f("ZodBoolean", (e, o) => {
  (on.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Dc(e, r, a, n)));
});
function $l(e) {
  return lc(Ot, e);
}
c($l, "boolean");
var At = f("ZodBigInt", (e, o) => {
  (io.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (a, n, i) => Uc(e, a, n, i)),
    (e.gte = (a, n) => e.check(K(a, n))),
    (e.min = (a, n) => e.check(K(a, n))),
    (e.gt = (a, n) => e.check(be(a, n))),
    (e.gte = (a, n) => e.check(K(a, n))),
    (e.min = (a, n) => e.check(K(a, n))),
    (e.lt = (a, n) => e.check(ye(a, n))),
    (e.lte = (a, n) => e.check(oe(a, n))),
    (e.max = (a, n) => e.check(oe(a, n))),
    (e.positive = (a) => e.check(be(BigInt(0), a))),
    (e.negative = (a) => e.check(ye(BigInt(0), a))),
    (e.nonpositive = (a) => e.check(oe(BigInt(0), a))),
    (e.nonnegative = (a) => e.check(K(BigInt(0), a))),
    (e.multipleOf = (a, n) => e.check(De(a, n))));
  let r = e._zod.bag;
  ((e.minValue = r.minimum ?? null),
    (e.maxValue = r.maximum ?? null),
    (e.format = r.format ?? null));
});
function Wp(e) {
  return uc(At, e);
}
c(Wp, "bigint");
var ur = f("ZodBigIntFormat", (e, o) => {
  (ba.init(e, o), At.init(e, o));
});
function Fp(e) {
  return mc(ur, e);
}
c(Fp, "int64");
function qp(e) {
  return gc(ur, e);
}
c(qp, "uint64");
var Dl = f("ZodSymbol", (e, o) => {
  (va.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Nc(e, r, a, n)));
});
function Vp(e) {
  return fc(Dl, e);
}
c(Vp, "symbol");
var Ul = f("ZodUndefined", (e, o) => {
  (Sa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => jc(e, r, a, n)));
});
function Gp(e) {
  return hc(Ul, e);
}
c(Gp, "_undefined");
var Nl = f("ZodNull", (e, o) => {
  (_a.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Zc(e, r, a, n)));
});
function Zl(e) {
  return yc(Nl, e);
}
c(Zl, "_null");
var jl = f("ZodAny", (e, o) => {
  (xa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Wc(e, r, a, n)));
});
function Kp() {
  return bc(jl);
}
c(Kp, "any");
var Bl = f("ZodUnknown", (e, o) => {
  (ka.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Fc(e, r, a, n)));
});
function Je() {
  return vc(Bl);
}
c(Je, "unknown");
var Ll = f("ZodNever", (e, o) => {
  (Ia.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Lc(e, r, a, n)));
});
function pr(e) {
  return Sc(Ll, e);
}
c(pr, "never");
var Wl = f("ZodVoid", (e, o) => {
  (Ca.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Bc(e, r, a, n)));
});
function Hp(e) {
  return _c(Wl, e);
}
c(Hp, "_void");
var Sn = f("ZodDate", (e, o) => {
  (Ra.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (a, n, i) => qc(e, a, n, i)),
    (e.min = (a, n) => e.check(K(a, n))),
    (e.max = (a, n) => e.check(oe(a, n))));
  let r = e._zod.bag;
  ((e.minDate = r.minimum ? new Date(r.minimum) : null),
    (e.maxDate = r.maximum ? new Date(r.maximum) : null));
});
function Jp(e) {
  return xc(Sn, e);
}
c(Jp, "date");
var Fl = f("ZodArray", (e, o) => {
  (Pa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => ol(e, r, a, n)),
    (e.element = o.element),
    (e.min = (r, a) => e.check(Ce(r, a))),
    (e.nonempty = (r) => e.check(Ce(1, r))),
    (e.max = (r, a) => e.check(Ke(r, a))),
    (e.length = (r, a) => e.check(He(r, a))),
    (e.unwrap = () => e.element));
});
function _n(e, o) {
  return Cc(Fl, e, o);
}
c(_n, "array");
function Yp(e) {
  let o = e._zod.def.shape;
  return gr(Object.keys(o));
}
c(Yp, "keyof");
var xn = f("ZodObject", (e, o) => {
  (Ta.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => rl(e, r, a, n)),
    I.defineLazy(e, "shape", () => o.shape),
    (e.keyof = () => gr(Object.keys(e._zod.def.shape))),
    (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: Je() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: Je() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: pr() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (r) => I.extend(e, r)),
    (e.safeExtend = (r) => I.safeExtend(e, r)),
    (e.merge = (r) => I.merge(e, r)),
    (e.pick = (r) => I.pick(e, r)),
    (e.omit = (r) => I.omit(e, r)),
    (e.partial = (...r) => I.partial(hr, e, r[0])),
    (e.required = (...r) => I.required(yr, e, r[0])));
});
function Xp(e, o) {
  let r = { type: "object", shape: e ?? {}, ...I.normalizeParams(o) };
  return new xn(r);
}
c(Xp, "object");
function Qp(e, o) {
  return new xn({
    type: "object",
    shape: e,
    catchall: pr(),
    ...I.normalizeParams(o),
  });
}
c(Qp, "strictObject");
function em(e, o) {
  return new xn({
    type: "object",
    shape: e,
    catchall: Je(),
    ...I.normalizeParams(o),
  });
}
c(em, "looseObject");
var kn = f("ZodUnion", (e, o) => {
  (rn.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Uo(e, r, a, n)),
    (e.options = o.options));
});
function mr(e, o) {
  return new kn({ type: "union", options: e, ...I.normalizeParams(o) });
}
c(mr, "union");
var ql = f("ZodXor", (e, o) => {
  (kn.init(e, o),
    wa.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Uo(e, r, a, n)),
    (e.options = o.options));
});
function tm(e, o) {
  return new ql({
    type: "union",
    options: e,
    inclusive: !1,
    ...I.normalizeParams(o),
  });
}
c(tm, "xor");
var Vl = f("ZodDiscriminatedUnion", (e, o) => {
  (kn.init(e, o), Ea.init(e, o));
});
function nm(e, o, r) {
  return new Vl({
    type: "union",
    options: o,
    discriminator: e,
    ...I.normalizeParams(r),
  });
}
c(nm, "discriminatedUnion");
var Gl = f("ZodIntersection", (e, o) => {
  (Oa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => il(e, r, a, n)));
});
function Kl(e, o) {
  return new Gl({ type: "intersection", left: e, right: o });
}
c(Kl, "intersection");
var Hl = f("ZodTuple", (e, o) => {
  (ao.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => al(e, r, a, n)),
    (e.rest = (r) => e.clone({ ...e._zod.def, rest: r })));
});
function Jl(e, o, r) {
  let a = o instanceof w,
    n = a ? r : o,
    i = a ? o : null;
  return new Hl({ type: "tuple", items: e, rest: i, ...I.normalizeParams(n) });
}
c(Jl, "tuple");
var In = f("ZodRecord", (e, o) => {
  (Aa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => sl(e, r, a, n)),
    (e.keyType = o.keyType),
    (e.valueType = o.valueType));
});
function Yl(e, o, r) {
  return new In({
    type: "record",
    keyType: e,
    valueType: o,
    ...I.normalizeParams(r),
  });
}
c(Yl, "record");
function om(e, o, r) {
  let a = G(e);
  return (
    (a._zod.values = void 0),
    new In({
      type: "record",
      keyType: a,
      valueType: o,
      ...I.normalizeParams(r),
    })
  );
}
c(om, "partialRecord");
function rm(e, o, r) {
  return new In({
    type: "record",
    keyType: e,
    valueType: o,
    mode: "loose",
    ...I.normalizeParams(r),
  });
}
c(rm, "looseRecord");
var Xl = f("ZodMap", (e, o) => {
  (za.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => tl(e, r, a, n)),
    (e.keyType = o.keyType),
    (e.valueType = o.valueType),
    (e.min = (...r) => e.check(ve(...r))),
    (e.nonempty = (r) => e.check(ve(1, r))),
    (e.max = (...r) => e.check(Ue(...r))),
    (e.size = (...r) => e.check(Ge(...r))));
});
function im(e, o, r) {
  return new Xl({
    type: "map",
    keyType: e,
    valueType: o,
    ...I.normalizeParams(r),
  });
}
c(im, "map");
var Ql = f("ZodSet", (e, o) => {
  (Ma.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => nl(e, r, a, n)),
    (e.min = (...r) => e.check(ve(...r))),
    (e.nonempty = (r) => e.check(ve(1, r))),
    (e.max = (...r) => e.check(Ue(...r))),
    (e.size = (...r) => e.check(Ge(...r))));
});
function am(e, o) {
  return new Ql({ type: "set", valueType: e, ...I.normalizeParams(o) });
}
c(am, "set");
var Pt = f("ZodEnum", (e, o) => {
  ($a.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (a, n, i) => Vc(e, a, n, i)),
    (e.enum = o.entries),
    (e.options = Object.values(o.entries)));
  let r = new Set(Object.keys(o.entries));
  ((e.extract = (a, n) => {
    let i = {};
    for (let s of a)
      if (r.has(s)) i[s] = o.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
    return new Pt({ ...o, checks: [], ...I.normalizeParams(n), entries: i });
  }),
    (e.exclude = (a, n) => {
      let i = { ...o.entries };
      for (let s of a)
        if (r.has(s)) delete i[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new Pt({ ...o, checks: [], ...I.normalizeParams(n), entries: i });
    }));
});
function gr(e, o) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map((a) => [a, a])) : e;
  return new Pt({ type: "enum", entries: r, ...I.normalizeParams(o) });
}
c(gr, "_enum");
function sm(e, o) {
  return new Pt({ type: "enum", entries: e, ...I.normalizeParams(o) });
}
c(sm, "nativeEnum");
var ed = f("ZodLiteral", (e, o) => {
  (Da.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Gc(e, r, a, n)),
    (e.values = new Set(o.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (o.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return o.values[0];
      },
    }));
});
function cm(e, o) {
  return new ed({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...I.normalizeParams(o),
  });
}
c(cm, "literal");
var td = f("ZodFile", (e, o) => {
  (Ua.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Jc(e, r, a, n)),
    (e.min = (r, a) => e.check(ve(r, a))),
    (e.max = (r, a) => e.check(Ue(r, a))),
    (e.mime = (r, a) => e.check(bt(Array.isArray(r) ? r : [r], a))));
});
function lm(e) {
  return Rc(td, e);
}
c(lm, "file");
var nd = f("ZodTransform", (e, o) => {
  (Na.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => el(e, r, a, n)),
    (e._zod.parse = (r, a) => {
      if (a.direction === "backward") throw new Oe(e.constructor.name);
      r.addIssue = (i) => {
        if (typeof i == "string") r.issues.push(I.issue(i, r.value, o));
        else {
          let s = i;
          (s.fatal && (s.continue = !1),
            s.code ?? (s.code = "custom"),
            s.input ?? (s.input = r.value),
            s.inst ?? (s.inst = e),
            r.issues.push(I.issue(s)));
        }
      };
      let n = o.transform(r.value, r);
      return n instanceof Promise
        ? n.then((i) => ((r.value = i), r))
        : ((r.value = n), r);
    }));
});
function fr(e) {
  return new nd({ type: "transform", transform: e });
}
c(fr, "transform");
var hr = f("ZodOptional", (e, o) => {
  (so.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => No(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function hn(e) {
  return new hr({ type: "optional", innerType: e });
}
c(hn, "optional");
var od = f("ZodExactOptional", (e, o) => {
  (Za.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => No(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function rd(e) {
  return new od({ type: "optional", innerType: e });
}
c(rd, "exactOptional");
var id = f("ZodNullable", (e, o) => {
  (ja.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => cl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function yn(e) {
  return new id({ type: "nullable", innerType: e });
}
c(yn, "nullable");
function dm(e) {
  return hn(yn(e));
}
c(dm, "nullish");
var ad = f("ZodDefault", (e, o) => {
  (Ba.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => dl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function sd(e, o) {
  return new ad({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : I.shallowClone(o);
    },
  });
}
c(sd, "_default");
var cd = f("ZodPrefault", (e, o) => {
  (La.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => ul(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function ld(e, o) {
  return new cd({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : I.shallowClone(o);
    },
  });
}
c(ld, "prefault");
var yr = f("ZodNonOptional", (e, o) => {
  (Wa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => ll(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function dd(e, o) {
  return new yr({ type: "nonoptional", innerType: e, ...I.normalizeParams(o) });
}
c(dd, "nonoptional");
var ud = f("ZodSuccess", (e, o) => {
  (Fa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Yc(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function um(e) {
  return new ud({ type: "success", innerType: e });
}
c(um, "success");
var pd = f("ZodCatch", (e, o) => {
  (qa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => pl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function md(e, o) {
  return new pd({
    type: "catch",
    innerType: e,
    catchValue: typeof o == "function" ? o : () => o,
  });
}
c(md, "_catch");
var gd = f("ZodNaN", (e, o) => {
  (Va.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Kc(e, r, a, n)));
});
function pm(e) {
  return Ic(gd, e);
}
c(pm, "nan");
var br = f("ZodPipe", (e, o) => {
  (Ga.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => ml(e, r, a, n)),
    (e.in = o.in),
    (e.out = o.out));
});
function bn(e, o) {
  return new br({ type: "pipe", in: e, out: o });
}
c(bn, "pipe");
var vr = f("ZodCodec", (e, o) => {
  (br.init(e, o), an.init(e, o));
});
function mm(e, o, r) {
  return new vr({
    type: "pipe",
    in: e,
    out: o,
    transform: r.decode,
    reverseTransform: r.encode,
  });
}
c(mm, "codec");
var fd = f("ZodReadonly", (e, o) => {
  (Ka.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => gl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function hd(e) {
  return new fd({ type: "readonly", innerType: e });
}
c(hd, "readonly");
var yd = f("ZodTemplateLiteral", (e, o) => {
  (Ha.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Hc(e, r, a, n)));
});
function gm(e, o) {
  return new yd({
    type: "template_literal",
    parts: e,
    ...I.normalizeParams(o),
  });
}
c(gm, "templateLiteral");
var bd = f("ZodLazy", (e, o) => {
  (Xa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => hl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.getter()));
});
function vd(e) {
  return new bd({ type: "lazy", getter: e });
}
c(vd, "lazy");
var Sd = f("ZodPromise", (e, o) => {
  (Ya.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => fl(e, r, a, n)),
    (e.unwrap = () => e._zod.def.innerType));
});
function fm(e) {
  return new Sd({ type: "promise", innerType: e });
}
c(fm, "promise");
var _d = f("ZodFunction", (e, o) => {
  (Ja.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Qc(e, r, a, n)));
});
function hm(e) {
  return new _d({
    type: "function",
    input: Array.isArray(e?.input) ? Jl(e?.input) : (e?.input ?? _n(Je())),
    output: e?.output ?? Je(),
  });
}
c(hm, "_function");
var Cn = f("ZodCustom", (e, o) => {
  (Qa.init(e, o),
    E.init(e, o),
    (e._zod.processJSONSchema = (r, a, n) => Xc(e, r, a, n)));
});
function ym(e) {
  let o = new Z({ check: "custom" });
  return ((o._zod.check = e), o);
}
c(ym, "check");
function bm(e, o) {
  return Pc(Cn, e ?? (() => !0), o);
}
c(bm, "custom");
function xd(e, o = {}) {
  return Tc(Cn, e, o);
}
c(xd, "refine");
function kd(e) {
  return wc(e);
}
c(kd, "superRefine");
var vm = Ec,
  Sm = Oc;
function _m(e, o = {}) {
  let r = new Cn({
    type: "custom",
    check: "custom",
    fn: c((a) => a instanceof e, "fn"),
    abort: !0,
    ...I.normalizeParams(o),
  });
  return (
    (r._zod.bag.Class = e),
    (r._zod.check = (a) => {
      a.value instanceof e ||
        a.issues.push({
          code: "invalid_type",
          expected: e.name,
          input: a.value,
          inst: r,
          path: [...(r._zod.def.path ?? [])],
        });
    }),
    r
  );
}
c(_m, "_instanceof");
var xm = c(
  (...e) => Ac({ Codec: vr, Boolean: Ot, String: Tt }, ...e),
  "stringbool",
);
function km(e) {
  let o = vd(() => mr([Vo(e), Ml(), $l(), Zl(), _n(o), Yl(Vo(), o)]));
  return o;
}
c(km, "json");
function Im(e, o) {
  return bn(fr(e), o);
}
c(Im, "preprocess");
var iv = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function av(e) {
  B({ customError: e });
}
c(av, "setErrorMap");
function sv() {
  return B().customError;
}
c(sv, "getErrorMap");
var Id;
Id || (Id = {});
var R = { ...gn, ...Bo, iso: Rt },
  cv = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly",
  ]);
function lv(e, o) {
  let r = e.$schema;
  return r === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : r === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : r === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (o ?? "draft-2020-12");
}
c(lv, "detectVersion");
function dv(e, o) {
  if (!e.startsWith("#"))
    throw new Error(
      "External $ref is not supported, only local refs (#/...) are allowed",
    );
  let r = e.slice(1).split("/").filter(Boolean);
  if (r.length === 0) return o.rootSchema;
  let a = o.version === "draft-2020-12" ? "$defs" : "definitions";
  if (r[0] === a) {
    let n = r[1];
    if (!n || !o.defs[n]) throw new Error(`Reference not found: ${e}`);
    return o.defs[n];
  }
  throw new Error(`Reference not found: ${e}`);
}
c(dv, "resolveRef");
function Cm(e, o) {
  if (e.not !== void 0) {
    if (typeof e.not == "object" && Object.keys(e.not).length === 0)
      return R.never();
    throw new Error(
      "not is not supported in Zod (except { not: {} } for never)",
    );
  }
  if (e.unevaluatedItems !== void 0)
    throw new Error("unevaluatedItems is not supported");
  if (e.unevaluatedProperties !== void 0)
    throw new Error("unevaluatedProperties is not supported");
  if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (e.$ref) {
    let n = e.$ref;
    if (o.refs.has(n)) return o.refs.get(n);
    if (o.processing.has(n))
      return R.lazy(() => {
        if (!o.refs.has(n))
          throw new Error(`Circular reference not resolved: ${n}`);
        return o.refs.get(n);
      });
    o.processing.add(n);
    let i = dv(n, o),
      s = V(i, o);
    return (o.refs.set(n, s), o.processing.delete(n), s);
  }
  if (e.enum !== void 0) {
    let n = e.enum;
    if (
      o.version === "openapi-3.0" &&
      e.nullable === !0 &&
      n.length === 1 &&
      n[0] === null
    )
      return R.null();
    if (n.length === 0) return R.never();
    if (n.length === 1) return R.literal(n[0]);
    if (n.every((s) => typeof s == "string")) return R.enum(n);
    let i = n.map((s) => R.literal(s));
    return i.length < 2 ? i[0] : R.union([i[0], i[1], ...i.slice(2)]);
  }
  if (e.const !== void 0) return R.literal(e.const);
  let r = e.type;
  if (Array.isArray(r)) {
    let n = r.map((i) => {
      let s = { ...e, type: i };
      return Cm(s, o);
    });
    return n.length === 0 ? R.never() : n.length === 1 ? n[0] : R.union(n);
  }
  if (!r) return R.any();
  let a;
  switch (r) {
    case "string": {
      let n = R.string();
      if (e.format) {
        let i = e.format;
        i === "email"
          ? (n = n.check(R.email()))
          : i === "uri" || i === "uri-reference"
            ? (n = n.check(R.url()))
            : i === "uuid" || i === "guid"
              ? (n = n.check(R.uuid()))
              : i === "date-time"
                ? (n = n.check(R.iso.datetime()))
                : i === "date"
                  ? (n = n.check(R.iso.date()))
                  : i === "time"
                    ? (n = n.check(R.iso.time()))
                    : i === "duration"
                      ? (n = n.check(R.iso.duration()))
                      : i === "ipv4"
                        ? (n = n.check(R.ipv4()))
                        : i === "ipv6"
                          ? (n = n.check(R.ipv6()))
                          : i === "mac"
                            ? (n = n.check(R.mac()))
                            : i === "cidr"
                              ? (n = n.check(R.cidrv4()))
                              : i === "cidr-v6"
                                ? (n = n.check(R.cidrv6()))
                                : i === "base64"
                                  ? (n = n.check(R.base64()))
                                  : i === "base64url"
                                    ? (n = n.check(R.base64url()))
                                    : i === "e164"
                                      ? (n = n.check(R.e164()))
                                      : i === "jwt"
                                        ? (n = n.check(R.jwt()))
                                        : i === "emoji"
                                          ? (n = n.check(R.emoji()))
                                          : i === "nanoid"
                                            ? (n = n.check(R.nanoid()))
                                            : i === "cuid"
                                              ? (n = n.check(R.cuid()))
                                              : i === "cuid2"
                                                ? (n = n.check(R.cuid2()))
                                                : i === "ulid"
                                                  ? (n = n.check(R.ulid()))
                                                  : i === "xid"
                                                    ? (n = n.check(R.xid()))
                                                    : i === "ksuid" &&
                                                      (n = n.check(R.ksuid()));
      }
      (typeof e.minLength == "number" && (n = n.min(e.minLength)),
        typeof e.maxLength == "number" && (n = n.max(e.maxLength)),
        e.pattern && (n = n.regex(new RegExp(e.pattern))),
        (a = n));
      break;
    }
    case "number":
    case "integer": {
      let n = r === "integer" ? R.number().int() : R.number();
      (typeof e.minimum == "number" && (n = n.min(e.minimum)),
        typeof e.maximum == "number" && (n = n.max(e.maximum)),
        typeof e.exclusiveMinimum == "number"
          ? (n = n.gt(e.exclusiveMinimum))
          : e.exclusiveMinimum === !0 &&
            typeof e.minimum == "number" &&
            (n = n.gt(e.minimum)),
        typeof e.exclusiveMaximum == "number"
          ? (n = n.lt(e.exclusiveMaximum))
          : e.exclusiveMaximum === !0 &&
            typeof e.maximum == "number" &&
            (n = n.lt(e.maximum)),
        typeof e.multipleOf == "number" && (n = n.multipleOf(e.multipleOf)),
        (a = n));
      break;
    }
    case "boolean": {
      a = R.boolean();
      break;
    }
    case "null": {
      a = R.null();
      break;
    }
    case "object": {
      let n = {},
        i = e.properties || {},
        s = new Set(e.required || []);
      for (let [p, u] of Object.entries(i)) {
        let h = V(u, o);
        n[p] = s.has(p) ? h : h.optional();
      }
      if (e.propertyNames) {
        let p = V(e.propertyNames, o),
          u =
            e.additionalProperties && typeof e.additionalProperties == "object"
              ? V(e.additionalProperties, o)
              : R.any();
        if (Object.keys(n).length === 0) {
          a = R.record(p, u);
          break;
        }
        let h = R.object(n).passthrough(),
          b = R.looseRecord(p, u);
        a = R.intersection(h, b);
        break;
      }
      if (e.patternProperties) {
        let p = e.patternProperties,
          u = Object.keys(p),
          h = [];
        for (let S of u) {
          let _ = V(p[S], o),
            z = R.string().regex(new RegExp(S));
          h.push(R.looseRecord(z, _));
        }
        let b = [];
        if (
          (Object.keys(n).length > 0 && b.push(R.object(n).passthrough()),
          b.push(...h),
          b.length === 0)
        )
          a = R.object({}).passthrough();
        else if (b.length === 1) a = b[0];
        else {
          let S = R.intersection(b[0], b[1]);
          for (let _ = 2; _ < b.length; _++) S = R.intersection(S, b[_]);
          a = S;
        }
        break;
      }
      let l = R.object(n);
      e.additionalProperties === !1
        ? (a = l.strict())
        : typeof e.additionalProperties == "object"
          ? (a = l.catchall(V(e.additionalProperties, o)))
          : (a = l.passthrough());
      break;
    }
    case "array": {
      let n = e.prefixItems,
        i = e.items;
      if (n && Array.isArray(n)) {
        let s = n.map((p) => V(p, o)),
          l = i && typeof i == "object" && !Array.isArray(i) ? V(i, o) : void 0;
        (l ? (a = R.tuple(s).rest(l)) : (a = R.tuple(s)),
          typeof e.minItems == "number" &&
            (a = a.check(R.minLength(e.minItems))),
          typeof e.maxItems == "number" &&
            (a = a.check(R.maxLength(e.maxItems))));
      } else if (Array.isArray(i)) {
        let s = i.map((p) => V(p, o)),
          l =
            e.additionalItems && typeof e.additionalItems == "object"
              ? V(e.additionalItems, o)
              : void 0;
        (l ? (a = R.tuple(s).rest(l)) : (a = R.tuple(s)),
          typeof e.minItems == "number" &&
            (a = a.check(R.minLength(e.minItems))),
          typeof e.maxItems == "number" &&
            (a = a.check(R.maxLength(e.maxItems))));
      } else if (i !== void 0) {
        let s = V(i, o),
          l = R.array(s);
        (typeof e.minItems == "number" && (l = l.min(e.minItems)),
          typeof e.maxItems == "number" && (l = l.max(e.maxItems)),
          (a = l));
      } else a = R.array(R.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${r}`);
  }
  return (
    e.description && (a = a.describe(e.description)),
    e.default !== void 0 && (a = a.default(e.default)),
    a
  );
}
c(Cm, "convertBaseSchema");
function V(e, o) {
  if (typeof e == "boolean") return e ? R.any() : R.never();
  let r = Cm(e, o),
    a = e.type || e.enum !== void 0 || e.const !== void 0;
  if (e.anyOf && Array.isArray(e.anyOf)) {
    let l = e.anyOf.map((u) => V(u, o)),
      p = R.union(l);
    r = a ? R.intersection(r, p) : p;
  }
  if (e.oneOf && Array.isArray(e.oneOf)) {
    let l = e.oneOf.map((u) => V(u, o)),
      p = R.xor(l);
    r = a ? R.intersection(r, p) : p;
  }
  if (e.allOf && Array.isArray(e.allOf))
    if (e.allOf.length === 0) r = a ? r : R.any();
    else {
      let l = a ? r : V(e.allOf[0], o),
        p = a ? 0 : 1;
      for (let u = p; u < e.allOf.length; u++)
        l = R.intersection(l, V(e.allOf[u], o));
      r = l;
    }
  (e.nullable === !0 && o.version === "openapi-3.0" && (r = R.nullable(r)),
    e.readOnly === !0 && (r = R.readonly(r)));
  let n = {},
    i = [
      "$id",
      "id",
      "$comment",
      "$anchor",
      "$vocabulary",
      "$dynamicRef",
      "$dynamicAnchor",
    ];
  for (let l of i) l in e && (n[l] = e[l]);
  let s = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let l of s) l in e && (n[l] = e[l]);
  for (let l of Object.keys(e)) cv.has(l) || (n[l] = e[l]);
  return (Object.keys(n).length > 0 && o.registry.add(r, n), r);
}
c(V, "convertSchema");
function Rm(e, o) {
  if (typeof e == "boolean") return e ? R.any() : R.never();
  let r = lv(e, o?.defaultTarget),
    a = e.$defs || e.definitions || {},
    n = {
      version: r,
      defs: a,
      refs: new Map(),
      processing: new Set(),
      rootSchema: e,
      registry: o?.registry ?? q,
    };
  return V(e, n);
}
c(Rm, "fromJSONSchema");
var Cd = {};
ke(Cd, {
  bigint: () => gv,
  boolean: () => mv,
  date: () => fv,
  number: () => pv,
  string: () => uv,
});
function uv(e) {
  return Hs(Tt, e);
}
c(uv, "string");
function pv(e) {
  return oc(Et, e);
}
c(pv, "number");
function mv(e) {
  return dc(Ot, e);
}
c(mv, "boolean");
function gv(e) {
  return pc(At, e);
}
c(gv, "bigint");
function fv(e) {
  return kc(Sn, e);
}
c(fv, "date");
B(sn());
var Sr = { minWidth: 320, maxWidth: 3840, minHeight: 320, maxHeight: 2160 },
  Rd = t
    .object({
      width: t.number().int().positive(),
      height: t.number().int().positive(),
    })
    .strict(),
  Pm = Rd.extend({
    width: t.number().int().min(Sr.minWidth).max(Sr.maxWidth),
    height: t.number().int().min(Sr.minHeight).max(Sr.maxHeight),
  }),
  hv = t.enum([
    "navigate",
    "back",
    "forward",
    "reload",
    "snapshot",
    "click",
    "fill",
    "type",
    "press",
    "cuaKeypress",
    "scroll",
    "cuaScroll",
    "domCuaScroll",
    "hover",
    "select",
    "check",
    "drag",
    "cuaDrag",
    "screenshot",
    "getState",
    "elementInfo",
    "evaluate",
    "getDialog",
    "handleDialog",
    "waitFor",
    "playwright",
    "playwrightWaitForTimeout",
    "capabilities",
    "browserVisibilityGet",
    "browserVisibilitySet",
    "browserViewportSet",
    "browserViewportReset",
    "activateTab",
    "newTab",
    "finalize",
    "finalizeTabs",
    "listUserTabs",
    "claimTab",
    "markDeliverable",
    "markHandoff",
    "nameSession",
    "turnEnded",
    "closeSession",
    "cancelRequest",
    "close",
    "list",
    "cdp",
  ]),
  Xe = t.enum(["desktop-continuous", "web-remote-replayable"]),
  yv = t
    .object({
      workspaceKey: t.string().min(1),
      sessionId: t.string().min(1),
      tabId: t.string().min(1).optional(),
      requestId: t.string().min(1),
      clientMode: Xe,
    })
    .strict(),
  Pd = t.enum([
    "backend_unavailable",
    "capability_unsupported",
    "duplicate_request_id",
    "ref_not_found",
    "navigation_blocked",
    "timeout",
    "renderer_unreachable",
    "cancelled",
    "execution_error",
  ]),
  Td = t
    .object({
      url: t.string(),
      title: t.string(),
      canGoBack: t.boolean(),
      canGoForward: t.boolean(),
      scrollX: t.number().optional(),
      scrollY: t.number().optional(),
      viewportWidth: t.number().optional(),
      viewportHeight: t.number().optional(),
    })
    .strict();
var Tm = t.enum(["left", "right", "middle"]),
  zt = t.enum(["Alt", "Control", "ControlOrMeta", "Meta", "Shift"]),
  wd = t.object({ x: t.number(), y: t.number() }).strict(),
  bv = t.enum([
    "allTextContents",
    "click",
    "count",
    "dblclick",
    "downloadMedia",
    "evaluate",
    "fill",
    "getAttribute",
    "innerText",
    "isEnabled",
    "isVisible",
    "press",
    "selectOption",
    "setChecked",
    "textContent",
    "waitFor",
  ]),
  vv = t.enum(["Alt", "Control", "ControlOrMeta", "Meta", "Shift"]),
  Qe = t.number().int().positive().optional(),
  Sv = t
    .object({
      value: t.string().optional(),
      label: t.string().optional(),
      index: t.number().int().nonnegative().optional(),
    })
    .strict()
    .refine(
      (e) => e.value !== void 0 || e.label !== void 0 || e.index !== void 0,
      "Select option requires value, label, or index",
    ),
  _v = t.discriminatedUnion("name", [
    t.object({ name: t.literal("domSnapshot") }).strict(),
    t
      .object({
        name: t.literal("elementInfo"),
        x: t.number(),
        y: t.number(),
        includeNonInteractable: t.boolean().optional(),
      })
      .strict(),
    t
      .object({
        name: t.literal("elementScreenshot"),
        x: t.number(),
        y: t.number(),
        includeNonInteractable: t.boolean().optional(),
      })
      .strict(),
    t
      .object({
        name: t.literal("evaluate"),
        expression: t.string().min(1),
        expressionKind: t.enum(["string", "function"]),
        arg: t.unknown().optional(),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("waitForLoadState"),
        state: t.enum(["load", "domcontentloaded", "networkidle"]).optional(),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("waitForURL"),
        url: t.string().min(1),
        waitUntil: t
          .enum(["load", "domcontentloaded", "networkidle", "commit"])
          .optional(),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("waitForEvent"),
        event: t.enum(["download", "filechooser"]),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("downloadPath"),
        downloadId: t.string().min(1),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("fileChooserSetFiles"),
        fileChooserId: t.string().min(1),
        files: t.array(t.string()).min(1),
        timeoutMs: Qe,
      })
      .strict(),
    t
      .object({
        name: t.literal("locator"),
        selector: t.string().min(1),
        operation: bv,
        value: t.unknown().optional(),
        arg: t.unknown().optional(),
        expression: t.string().min(1).optional(),
        expressionKind: t.enum(["string", "function"]).optional(),
        attribute: t.string().min(1).optional(),
        checked: t.boolean().optional(),
        replace: t.boolean().optional(),
        force: t.boolean().optional(),
        button: Tm.optional(),
        modifiers: t.array(vv).optional(),
        state: t.enum(["attached", "detached", "visible", "hidden"]).optional(),
        selections: t.array(Sv).min(1).optional(),
        timeoutMs: Qe,
      })
      .strict(),
  ]),
  Mt = t.discriminatedUnion("method", [
    t
      .object({
        method: t.literal("navigate"),
        url: t.string().min(1),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({ method: t.literal("back"), tabId: t.string().optional() })
      .strict(),
    t
      .object({ method: t.literal("forward"), tabId: t.string().optional() })
      .strict(),
    t
      .object({ method: t.literal("reload"), tabId: t.string().optional() })
      .strict(),
    t
      .object({
        method: t.literal("snapshot"),
        maxElements: t.number().int().positive().optional(),
        includeHidden: t.boolean().optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("click"),
        ref: t.string().min(1).optional(),
        x: t.number().optional(),
        y: t.number().optional(),
        button: Tm.optional(),
        doubleClick: t.boolean().optional(),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("fill"),
        ref: t.string().min(1),
        value: t.string(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("type"),
        ref: t.string().min(1).optional(),
        text: t.string(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("press"),
        key: t.string().min(1),
        ref: t.string().min(1).optional(),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("cuaKeypress"),
        keys: t.array(t.string().min(1)).min(1),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("scroll"),
        ref: t.string().min(1).optional(),
        x: t.number().optional(),
        y: t.number().optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("cuaScroll"),
        x: t.number(),
        y: t.number(),
        scrollX: t.number(),
        scrollY: t.number(),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("domCuaScroll"),
        nodeId: t.string().min(1).optional(),
        scrollX: t.number(),
        scrollY: t.number(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("screenshot"),
        ref: t.string().min(1).optional(),
        fullPage: t.boolean().optional(),
        clip: t
          .object({
            x: t.number(),
            y: t.number(),
            width: t.number().positive(),
            height: t.number().positive(),
          })
          .strict()
          .optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({ method: t.literal("getState"), tabId: t.string().optional() })
      .strict(),
    t
      .object({
        method: t.literal("hover"),
        ref: t.string().min(1).optional(),
        x: t.number().optional(),
        y: t.number().optional(),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("select"),
        ref: t.string().min(1),
        values: t.array(t.string()).min(1),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("check"),
        ref: t.string().min(1),
        checked: t.boolean().optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("drag"),
        fromRef: t.string().min(1).optional(),
        toRef: t.string().min(1).optional(),
        from: wd.optional(),
        to: wd.optional(),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("cuaDrag"),
        path: t.array(wd).min(1),
        modifiers: t.array(zt).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("elementInfo"),
        x: t.number(),
        y: t.number(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("evaluate"),
        expression: t.string().min(1),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({ method: t.literal("getDialog"), tabId: t.string().optional() })
      .strict(),
    t
      .object({
        method: t.literal("handleDialog"),
        accept: t.boolean(),
        promptText: t.string().optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("waitFor"),
        selector: t.string().min(1).optional(),
        text: t.string().min(1).optional(),
        textGone: t.string().min(1).optional(),
        timeoutMs: t.number().int().positive().optional(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("playwrightWaitForTimeout"),
        timeoutMs: t.number().int().nonnegative(),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("playwright"),
        action: _v,
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("capabilities"),
        tabId: t.string().optional(),
      })
      .strict(),
    t.object({ method: t.literal("browserVisibilityGet") }).strict(),
    t
      .object({
        method: t.literal("browserVisibilitySet"),
        visible: t.boolean(),
      })
      .strict(),
    Pm.extend({
      method: t.literal("browserViewportSet"),
      tabId: t.string().optional(),
    }).strict(),
    t
      .object({
        method: t.literal("browserViewportReset"),
        tabId: t.string().optional(),
      })
      .strict(),
    t
      .object({ method: t.literal("activateTab"), tabId: t.string().min(1) })
      .strict(),
    t.object({ method: t.literal("newTab") }).strict(),
    t.object({ method: t.literal("listUserTabs") }).strict(),
    t
      .object({ method: t.literal("claimTab"), tabId: t.string().min(1) })
      .strict(),
    t
      .object({
        method: t.literal("finalizeTabs"),
        keep: t.array(
          t
            .object({
              tabId: t.string().min(1),
              status: t.enum(["handoff", "deliverable"]),
            })
            .strict(),
        ),
      })
      .strict(),
    t
      .object({
        method: t.literal("markDeliverable"),
        tabId: t.string().min(1),
      })
      .strict(),
    t
      .object({ method: t.literal("markHandoff"), tabId: t.string().min(1) })
      .strict(),
    t
      .object({
        method: t.literal("nameSession"),
        name: t.string().trim().min(1),
      })
      .strict(),
    t
      .object({
        method: t.literal("finalize"),
        tabId: t.string().optional(),
        deliverable: t.boolean().optional(),
      })
      .strict(),
    t
      .object({
        method: t.literal("turnEnded"),
        turnId: t.string().min(1).optional(),
      })
      .strict(),
    t.object({ method: t.literal("closeSession") }).strict(),
    t
      .object({
        method: t.literal("cancelRequest"),
        requestId: t.string().min(1),
      })
      .strict(),
    t
      .object({ method: t.literal("close"), tabId: t.string().optional() })
      .strict(),
    t.object({ method: t.literal("list") }).strict(),
    t
      .object({
        method: t.literal("cdp"),
        op: t.enum(["send", "events", "openDevTools"]).optional(),
        cdpMethod: t.string().min(1).optional(),
        params: t.unknown().optional(),
        clear: t.boolean().optional(),
        limit: t.number().int().positive().max(5000).optional(),
        tabId: t.string().optional(),
      })
      .strict(),
  ]);
var Ed = t.enum(["iab", "extension", "cdp"]),
  wm = t
    .object({
      id: t.string().trim().min(1),
      description: t.string().trim().min(1),
    })
    .strict(),
  Od = t
    .object({
      id: t.string().trim().min(1),
      generation: t.number().int().nonnegative().default(0),
      type: Ed,
      name: t.string().trim().min(1),
      capabilities: t
        .object({
          browser: t.array(wm).optional(),
          tab: t.array(wm).optional(),
        })
        .strict(),
      apiSupportOverrides: t.record(t.string(), t.boolean()).optional(),
      metadata: t.record(t.string(), t.string()).optional(),
    })
    .strict(),
  _r = t.enum(["live", "cached"]),
  xv = t
    .object({
      requestId: t.string().trim().min(1),
      workspaceKey: t.string().trim().min(1),
      workspacePath: t.string().trim().min(1),
      workspaceIdentity: t.string().trim().min(1).optional(),
      remoteSessionId: t.string().trim().min(1).optional(),
      sessionId: t.string().trim().min(1),
      turnId: t.string().trim().min(1).optional(),
      clientMode: Xe,
      sessionContext: _r,
    })
    .strict(),
  YA = xv
    .extend({
      browserId: t.string().trim().min(1),
      browserGeneration: t.number().int().nonnegative(),
    })
    .strict(),
  Em = t.object({ browsers: t.array(Od) }).strict();
var kv = t
    .object({
      x: t.number(),
      y: t.number(),
      width: t.number(),
      height: t.number(),
    })
    .strict(),
  Ad = t
    .object({
      ref: t.string().min(1),
      tag: t.string(),
      role: t.string().optional(),
      name: t.string().optional(),
      text: t.string().optional(),
      value: t.string().optional(),
      disabled: t.boolean().optional(),
      checked: t.boolean().optional(),
      selector: t.string(),
      xpath: t.string(),
      rect: kv,
      inViewport: t.boolean(),
      parentRef: t.string().optional(),
      framePath: t.string().optional(),
      attributes: t.record(t.string(), t.string()).optional(),
    })
    .strict(),
  Iv = t
    .object({
      tag: t.string(),
      depth: t.number().int().nonnegative(),
      inViewport: t.boolean(),
      ref: t.string().min(1).optional(),
      role: t.string().optional(),
      name: t.string().optional(),
      text: t.string().optional(),
      attributes: t.record(t.string(), t.string()).optional(),
    })
    .strict(),
  Om = t
    .object({
      url: t.string(),
      title: t.string(),
      dom: t.array(Iv).optional(),
      domTruncated: t.boolean().optional(),
      elements: t.array(Ad),
      truncated: t.boolean(),
    })
    .strict();
var Am = t
    .object({
      tabId: t.string(),
      url: t.string(),
      title: t.string(),
      viewport: Rd,
      active: t.boolean().optional(),
      lifecycle: t.enum(["active", "deliverable", "handoff"]).optional(),
    })
    .strict(),
  Cv = t
    .object({
      id: t.string().min(1),
      lastOpened: t.string().optional(),
      tabGroup: t.string().optional(),
      title: t.string().optional(),
      url: t.string().optional(),
    })
    .strict(),
  Rv = t
    .object({
      type: t.enum(["alert", "confirm", "prompt", "beforeunload"]),
      message: t.string(),
      defaultPrompt: t.string().optional(),
    })
    .strict(),
  Pv = t
    .object({
      browserUse: t.literal(!0),
      backendType: Ed,
      browserId: t.string().min(1),
      browserGeneration: t.number().int().nonnegative(),
      openTabIds: t.array(t.string()),
      tabId: t.string().optional(),
      currentUrl: t.string().optional(),
      lifecycle: t
        .enum(["active", "deliverable", "handoff", "closed"])
        .optional(),
    })
    .strict(),
  $t = t
    .object({
      ok: t.boolean(),
      state: Td.optional(),
      snapshot: Om.optional(),
      image: t
        .object({ base64: t.string(), mimeType: t.literal("image/png") })
        .strict()
        .optional(),
      tabs: t.array(Am).optional(),
      userTabs: t.array(Cv).optional(),
      tab: Am.optional(),
      value: t.unknown().optional(),
      element: Ad.optional(),
      dialog: Rv.nullable().optional(),
      error: t
        .object({
          code: Pd,
          message: t.string(),
          sideEffect: t.enum(["none", "uncertain"]).optional(),
        })
        .strict()
        .optional(),
      meta: Pv.optional(),
      elapsedMs: t.number().nonnegative(),
    })
    .strict();
var xr = ["local-download-upload", "remote-download"];
var Tv = [
    "server-bundle",
    "node-runtime",
    "node-pty",
    "glm",
    "bfs",
    "ripgrep",
    "ugrep",
  ],
  zd = [
    "server-bundle",
    "node-runtime",
    "node-pty",
    "glm",
    "bfs",
    "ripgrep",
    "ugrep",
  ],
  zm = ["server-bundle", "node-runtime"];
var yz = zd.filter((e) => !zm.includes(e)),
  wv = new Set(Tv),
  bz = new Set(zd),
  vz = new Set(zm);
function Sz(e) {
  return [...zd];
}
c(Sz, "normalizeRemoteResourcePackageSelection");
function kr(e) {
  return wv.has(e);
}
c(kr, "isKnownRemoteResourcePackageId");
var Ev = ["claude", "opencode", "gemini", "codex", "glm"],
  re = t.enum(Ev);
var Md = ["7d", "30d"],
  Ov = t.object({
    modelId: t.string().nullable(),
    totalTokens: t.number(),
    share: t.number(),
  }),
  Av = t.object({
    totalTokens: t.number(),
    inputTokens: t.number(),
    outputTokens: t.number(),
    reasoningTokens: t.number(),
    cacheCreationTokens: t.number(),
    cacheReadTokens: t.number(),
    cacheHitRate: t.number(),
    totalSessions: t.number(),
    totalTurns: t.number(),
    toolCallCount: t.number(),
    toolErrorRate: t.number(),
    modelErrorRate: t.number(),
    avgTimeToFirstTokenMs: t.number().nullable(),
    avgTurnDurationMs: t.number().nullable(),
    activeDays: t.number(),
    currentStreakDays: t.number(),
    favoriteModel: Ov.nullable(),
  }),
  zv = t.object({
    date: t.string(),
    level: t.union([
      t.literal(0),
      t.literal(1),
      t.literal(2),
      t.literal(3),
      t.literal(4),
    ]),
    totalTokens: t.number(),
    turnCount: t.number(),
    toolCallCount: t.number(),
  }),
  Mv = t.object({ weekIndex: t.number(), days: t.array(zv.nullable()) }),
  $v = t.object({
    startDate: t.string().nullable(),
    endDate: t.string().nullable(),
    maxTokens: t.number(),
    weeks: t.array(Mv),
  }),
  Dv = t.object({ modelId: t.string().nullable(), totalTokens: t.number() }),
  Uv = t.object({ date: t.string(), models: t.array(Dv) }),
  Nv = t.object({
    modelId: t.string().nullable(),
    totalTokens: t.number(),
    inputTokens: t.number(),
    outputTokens: t.number(),
    requestCount: t.number(),
    share: t.number(),
  }),
  Zv = t.object({
    toolName: t.string(),
    callCount: t.number(),
    errorCount: t.number(),
    errorRate: t.number(),
    avgDurationMs: t.number().nullable(),
  }),
  jv = t.object({
    range: t.enum(Md),
    generatedAt: t.number(),
    timeZone: t.string(),
    source: t.literal("agent-db"),
    summary: Av,
    heatmap: $v,
    dailyModelUsage: t.array(Uv),
    models: t.array(Nv),
    tools: t.array(Zv),
  });
var Ir = ["glm"];
var T = t.string().trim().min(1),
  J = t.record(t.string(), t.unknown()),
  W = t.number().int().nonnegative(),
  Rn = t.enum(["desktop-continuous", "web-remote-replayable"]),
  $d = t.enum(["user-visible", "model-only"]),
  Dd = t.enum([
    "background_task",
    "fork",
    "goal_state_change",
    "goal-continuation",
    "plugin_reference",
    "rewind",
    "selection_side_chat",
    "subagent",
    "subagent_message",
    "todo_reminder",
  ]),
  M = t
    .object({
      workspacePath: T,
      workspaceIdentity: T.optional(),
      remoteSessionId: T.optional(),
      workspaceKey: T,
    })
    .strict(),
  Ud = t.enum(["allow", "deny", "escalate", "modify"]),
  Bv = t.enum(["allow", "deny", "ask"]),
  Lv = t.object({ toolName: T, ruleContent: t.string().optional() }).strict(),
  Nd = t
    .object({
      type: t.literal("addRules"),
      behavior: Bv,
      rules: t.array(Lv).min(1),
    })
    .strict(),
  Dt = t
    .object({
      decision: Ud,
      reason: t.string().optional(),
      modifiedInput: t.unknown().optional(),
      permissionUpdates: t.array(Nd).optional(),
    })
    .strict(),
  F = t.object({ providerId: T, modelId: T, variant: T.optional() }).strict(),
  Pe = t.enum(["plan", "build", "edit", "yolo", "auto"]),
  Zd = t.enum(["idle", "running", "waiting", "paused", "completed", "error"]),
  Wv = t.enum([
    "interactive",
    "fork",
    "selection_side_chat",
    "workflow_parent",
    "workflow_child",
    "subagent_child",
    "nested_workflow_child",
  ]),
  jd = t
    .object({
      sessionId: T,
      targetId: T,
      objective: T,
      summaryTitle: t.string().min(1).nullable().default(null),
      status: t.enum(["active", "paused", "budget_limited", "complete"]),
      tokenBudget: t.number().int().positive().nullable(),
      tokensUsed: t.number().int().nonnegative(),
      timeUsedSeconds: t.number().int().nonnegative(),
      activeInputId: T.nullable().optional(),
      activeRunStartedAtMs: W.nullable().optional(),
      activeRunLastSeenAtMs: W.nullable().optional(),
      createdAt: W,
      updatedAt: W,
    })
    .strict(),
  $m = t
    .object({
      nextAction: t.string().nullable().optional(),
      passed: t.boolean(),
      reason: t.string(),
    })
    .strict(),
  Fv = t
    .object({
      version: t.literal(1),
      kind: t.literal("synthetic"),
      type: t.literal("goal_verification"),
      display: t.literal("separator"),
      targetId: T,
      verificationId: T,
      status: t.enum(["started", "completed", "failed_closed", "cancelled"]),
      verification: $m.optional(),
      goalIteration: t.number().int().positive().optional(),
      anchorAssistantMessageId: T.optional(),
      anchorTurnId: T.optional(),
      startedAt: W.optional(),
      updatedAt: W,
    })
    .strict(),
  Bd = t
    .object({
      sessionId: T,
      workspace: M,
      parentSessionId: T.optional(),
      traceId: T.optional(),
      sessionKind: Wv,
      title: t.string(),
      titleSource: t
        .enum(["default", "first_input", "generated", "custom"])
        .optional(),
      mode: Pe,
      status: Zd,
      model: F.optional(),
      target: jd.nullable().optional(),
      createdAt: W,
      updatedAt: W,
      archivedAt: W.optional(),
    })
    .strict(),
  et = t
    .object({
      kind: t.literal("subagent"),
      agentId: T,
      agentType: T,
      childSessionId: T,
      childTurnId: T.optional(),
      description: t.string().optional(),
      parentSessionId: T,
      parentToolCallId: T.optional(),
      parentTurnId: T.optional(),
    })
    .strict(),
  Dm = t.object({ created: W, completed: W.optional() }).strict(),
  Um = t
    .object({
      total: t.number().int().nonnegative().optional(),
      input: t.number().int().nonnegative(),
      output: t.number().int().nonnegative(),
      reasoning: t.number().int().nonnegative(),
      cache: t
        .object({
          read: t.number().int().nonnegative(),
          write: t.number().int().nonnegative(),
        })
        .strict(),
    })
    .strict(),
  Nm = t
    .object({
      origin: t.enum(["real_user", "agent_runtime", "system", "migration"]),
      kind: t.enum([
        "user_prompt",
        "slash_command",
        "system_reminder",
        "background_notification",
        "subagent_notification",
        "todo_reminder",
        "rewind_notice",
        "fork_notice",
        "timeline_event",
        "compact_summary",
        "assistant_response",
      ]),
      source: t.string().optional(),
      commandName: t.string().optional(),
      uiVisibility: t.enum(["visible", "hidden", "debug"]),
      providerVisibility: t.enum(["visible", "hidden"]),
      transcriptVisibility: t.enum(["visible", "hidden"]),
    })
    .strict(),
  qv = t
    .object({
      messageId: T,
      sessionId: T,
      role: t.literal("user"),
      time: Dm,
      agent: T,
      model: F,
      system: t.string().optional(),
      tools: t.record(t.string(), t.boolean()).optional(),
      synthetic: t.boolean().optional(),
      source: Dd.optional(),
      visibility: $d.optional(),
      semantics: Nm.optional(),
      metadata: J.optional(),
    })
    .strict(),
  Vv = t
    .object({
      messageId: T,
      sessionId: T,
      role: t.literal("assistant"),
      time: Dm,
      parentMessageId: T,
      agent: T,
      model: F,
      path: t.object({ cwd: T, root: T }).strict(),
      cost: t.number().nonnegative(),
      tokens: Um,
      finish: t.string().optional(),
      error: J.optional(),
      semantics: Nm.optional(),
      structured: t.unknown().optional(),
    })
    .strict(),
  Gv = t.discriminatedUnion("role", [qv, Vv]),
  ie = t.object({ partId: T, sessionId: T, messageId: T }),
  Kv = t.discriminatedUnion("status", [
    t
      .object({ status: t.literal("pending"), input: J, raw: t.string() })
      .strict(),
    t
      .object({
        status: t.literal("running"),
        input: J,
        title: t.string().optional(),
        metadata: J.optional(),
        startedAt: W,
      })
      .strict(),
    t
      .object({
        status: t.literal("completed"),
        input: J,
        output: t.string(),
        title: t.string(),
        metadata: J,
        startedAt: W,
        completedAt: W,
      })
      .strict(),
    t
      .object({
        status: t.literal("error"),
        input: J,
        error: t.string(),
        metadata: J.optional(),
        startedAt: W,
        completedAt: W,
      })
      .strict(),
  ]),
  Mm = F.extend({ label: t.string().optional() }),
  Hv = t.object({ start: W.optional(), end: W.optional() }).strict(),
  Jv = ie
    .extend({
      type: t.literal("timeline"),
      timelineType: t.enum([
        "context_compaction",
        "goal_verification",
        "session_fork",
        "model_change",
      ]),
      display: t.enum(["separator", "worklog"]),
      status: t.string().optional(),
      anchorMessageId: T.optional(),
      anchorTurnId: T.optional(),
      time: Hv.optional(),
      operationId: t.string().optional(),
      trigger: t
        .enum(["manual", "auto", "partial", "reactive", "session_memory"])
        .optional(),
      phase: t
        .enum(["standalone_turn", "pre_request", "mid_turn", "reactive"])
        .optional(),
      compactReason: t.string().optional(),
      boundaryId: t.string().optional(),
      summaryMessageId: T.optional(),
      preCompactTokenCount: t.number().int().nonnegative().optional(),
      postCompactTokenCount: t.number().int().nonnegative().optional(),
      truePostCompactTokenCount: t.number().int().nonnegative().optional(),
      attempt: t.number().int().nonnegative().optional(),
      maxAttempts: t.number().int().nonnegative().optional(),
      reason: t.string().optional(),
      targetId: t.string().optional(),
      verificationId: t.string().optional(),
      goalIteration: t.number().int().nonnegative().optional(),
      verification: t
        .object({
          passed: t.boolean(),
          reason: t.string(),
          nextAction: t.string().nullable().optional(),
        })
        .strict()
        .optional(),
      parentSessionId: T.optional(),
      targetMessageId: T.optional(),
      targetCheckpointId: t.string().optional(),
      restoredFileCount: t.number().int().nonnegative().optional(),
      fromModel: Mm.optional(),
      toModel: Mm.extend({ label: T }).optional(),
    })
    .strict(),
  Ld = t.discriminatedUnion("type", [
    ie
      .extend({
        type: t.literal("text"),
        text: t.string(),
        synthetic: t.boolean().optional(),
        ignored: t.boolean().optional(),
        metadata: J.optional(),
      })
      .strict(),
    ie
      .extend({
        type: t.literal("reasoning"),
        text: t.string(),
        metadata: J.optional(),
      })
      .strict(),
    ie
      .extend({
        type: t.literal("file"),
        mime: T,
        filename: t.string().optional(),
        url: T,
        metadata: J.optional(),
      })
      .strict(),
    ie
      .extend({
        type: t.literal("tool"),
        callId: T,
        tool: T,
        state: Kv,
        metadata: J.optional(),
      })
      .strict(),
    ie
      .extend({
        type: t.literal("step-start"),
        snapshot: t.string().optional(),
      })
      .strict(),
    ie
      .extend({
        type: t.literal("step-finish"),
        reason: t.string(),
        snapshot: t.string().optional(),
        cost: t.number().nonnegative(),
        tokens: Um,
      })
      .strict(),
    ie.extend({ type: t.literal("snapshot"), snapshot: t.string() }).strict(),
    ie
      .extend({ type: t.literal("patch"), hash: T, files: t.array(t.string()) })
      .strict(),
    ie
      .extend({
        type: t.literal("compaction"),
        auto: t.boolean(),
        reason: t.string().optional(),
        summaryMessageId: T.optional(),
        metadata: J.optional(),
      })
      .strict(),
    Jv,
    ie
      .extend({
        type: t.literal("subagent"),
        prompt: t.string(),
        description: t.string(),
        agent: T,
        model: F.optional(),
        command: t.string().optional(),
      })
      .strict(),
    ie.extend({ type: t.literal("agent"), name: T }).strict(),
    ie
      .extend({
        type: t.literal("retry"),
        attempt: t.number().int().nonnegative(),
        error: J,
      })
      .strict(),
  ]),
  Wd = t.object({ info: Gv, parts: t.array(Ld) }).strict(),
  Yv = t
    .object({
      kind: t.literal("api_retry"),
      attempt: t.number().int().positive(),
      maxRetries: t.number().int().nonnegative(),
      retryDelayMs: t.number().int().nonnegative(),
      errorStatus: t.number().int().nonnegative().nullable(),
      error: t.string(),
    })
    .strict(),
  Xv = t
    .object({
      inputTokens: t.number().int().nonnegative(),
      cacheReadTokens: t.number().int().nonnegative(),
      cacheWriteTokens: t.number().int().nonnegative(),
      latestHitRate: t.number().nonnegative().nullable().optional(),
      hitRateRequestCount: t.number().int().nonnegative().optional(),
      totalInputTokens: t.number().int().nonnegative().optional(),
      totalCacheReadTokens: t.number().int().nonnegative().optional(),
      totalCacheWriteTokens: t.number().int().nonnegative().optional(),
      hitRate: t.number().nonnegative().nullable(),
    })
    .strict(),
  Qv = t.enum([
    "system_prompt",
    "meta_user_context",
    "skills",
    "tool_prompt",
    "system_tool_schemas",
    "mcp_tool_schemas",
    "messages",
  ]),
  eS = t.object({ source: Qv, chars: t.number().int().nonnegative() }).strict(),
  tS = t.array(eS),
  nS = t
    .object({
      used: t.number().int().nonnegative(),
      size: t.number().int().positive(),
      cost: t
        .object({ amount: t.number().nonnegative(), currency: T })
        .strict()
        .nullable()
        .optional(),
      cache: Xv.optional(),
      breakdown: tS.optional(),
    })
    .strict(),
  Zm = t
    .object({
      eventSeq: t.number().int().nonnegative(),
      stateRevision: t.number().int().nonnegative(),
      deliveryKind: Rn.optional(),
      activeTurnId: T.optional(),
      activeTurnKind: t.enum(["regular", "compact", "rewind"]).optional(),
      pendingRequestIds: t.array(T),
      apiRetry: Yv.nullable().optional(),
      contextUsage: nS.optional(),
      goalVerifications: t.array($m).optional(),
      goalVerificationTimeline: t.array(Fv).optional(),
    })
    .strict();
var oS = [
    "telegram",
    "webhook",
    "feishu",
    "lark",
    "weixin",
    "discord",
    "wecom",
  ],
  Fd = t
    .object({
      provider: t.enum(["feishu", "lark", "weixin"]),
      botId: t.string().trim().min(1),
      providerUserId: t.string().trim().min(1),
      chatType: t.enum(["private", "group"]),
    })
    .strict();
var rS = t
  .object({
    status: t.boolean(),
    new: t.boolean(),
    workspace: t.boolean(),
    model: t.boolean(),
    mode: t.boolean().optional(),
    thoughtLevel: t.boolean(),
    sandboxMode: t.boolean().optional(),
    approvalPolicy: t.boolean().optional(),
    cli: t.boolean().optional(),
    reply: t.boolean(),
  })
  .strict();
var iS = t
    .object({
      model: t.string().min(1).optional(),
      mode: t.string().min(1).optional(),
      thoughtLevel: t.string().min(1).optional(),
      sandboxMode: t.string().min(1).optional(),
      approvalPolicy: t.string().min(1).optional(),
      cli: t.enum(["codex", "claude", "opencode", "gemini", "glm"]).optional(),
    })
    .strict(),
  aS = t
    .object({
      provider: t.enum(["codex", "claude", "opencode", "gemini", "glm"]),
      model: t.string().min(1).optional(),
      mode: t.string().min(1).optional(),
      thoughtLevel: t.string().min(1).optional(),
    })
    .strict(),
  sS = t
    .object({
      value: t.string(),
      label: t.string(),
      description: t.string().optional(),
    })
    .strict(),
  cS = t
    .object({
      question: t.string(),
      header: t.string(),
      options: t.array(sS),
      multiSelect: t.boolean().optional(),
    })
    .strict(),
  lS = t
    .object({
      taskId: t.string().min(1),
      requestId: t.string().min(1),
      runId: t.string().min(1),
      origin: et.optional(),
      actorKey: t.string().min(1).optional(),
      currentQuestionIndex: t.number().int().min(0),
      questions: t.array(cS),
      answers: t.record(t.string(), t.array(t.string())),
      renderContext: t
        .object({ kind: t.literal("plan_approval"), plan: t.string().min(1) })
        .strict()
        .optional(),
      expandedCustomAnswerQuestionIndexes: t
        .array(t.number().int().min(0))
        .optional(),
      handledAt: t.number().optional(),
    })
    .strict(),
  dS = t
    .object({
      id: t.string().min(1),
      name: t.string(),
      provider: t.enum(oS),
      enabled: t.boolean(),
      credentialRef: t.string().min(1).optional(),
      webhookSecretRef: t.string().min(1).optional(),
      webhookUrl: t.string().url().optional(),
      webhookAuthHeaderName: t.string().min(1).optional(),
      feishuAppId: t.string().min(1).optional(),
      providerUserId: t.string().min(1).optional(),
      displayName: t.string().optional(),
      allowedWorkspaces: t.array(t.string().min(1)),
      allowedCommands: rS,
      currentOptions: iS,
      replyMode: t.enum([
        "assistant_changes",
        "assistant_toolcalls_changes",
        "summary_changes",
        "streaming_card",
      ]),
    })
    .strict(),
  Gz = t.object({ version: t.literal(2), bots: t.array(dS) }).strict(),
  Kz = t
    .object({
      version: t.literal(2),
      bots: t.record(
        t.string(),
        t.object({
          botId: t.string().min(1),
          workspacePath: t.string().min(1),
          workspaceIdentity: t.string().min(1).optional(),
          workspaceId: t.string().min(1).optional(),
          mode: t.enum(["draft", "task"]),
          activeTaskId: t.string().min(1).nullable(),
          draftOptions: aS.optional(),
          pendingPermissionOptions: t
            .array(
              t.object({
                requestId: t.string().min(1),
                optionId: t.string().min(1),
                command: t.enum(["approve", "deny"]),
                label: t.string().min(1),
                response: Dt,
                handledAt: t.number().optional(),
              }),
            )
            .optional(),
          pendingElicitation: lS.optional(),
          telegramOffset: t.number().optional(),
          weixinGetUpdatesBuf: t.string().optional(),
          weixinActivatedAt: t.number().optional(),
          updatedAt: t.number(),
        }),
      ),
    })
    .strict();
var qd = 64;
function jm(e) {
  let o = e.trim();
  return (
    o.length > 0 &&
    o.length <= qd &&
    !uS(o) &&
    !o.includes(":") &&
    !o.includes("/") &&
    !o.includes("\\")
  );
}
c(jm, "isValidWslUser");
function uS(e) {
  for (let o of e) {
    let r = o.codePointAt(0) ?? 0;
    if (r < 32 || r === 127) return !0;
  }
  return !1;
}
c(uS, "containsControlCharacter");
var Pn = t
  .string()
  .trim()
  .max(qd)
  .refine((e) => e.length === 0 || jm(e), { message: "Invalid WSL user" });
var A = t.string().trim().min(1),
  Tn = t.enum(["zh-CN", "en-US"]),
  Bm = t.enum(["system", "zh-CN", "en-US"]),
  Lm = t.enum(["queue", "guide"]),
  Wm = t.enum(["stable", "preview"]),
  Fm = t.number().int().min(-3).max(5),
  Cr = t.discriminatedUnion("mode", [
    t.object({ mode: t.literal("auto") }),
    t.object({
      mode: t.literal("shell"),
      dialect: t.enum(["cmd", "git-bash"]),
      id: A,
      label: A,
      path: A,
    }),
  ]),
  qm = t.array(re).transform(() => [...Ir]),
  Vm = t
    .object({
      zai: t.enum(["oauth", "apiKey"]).optional(),
      bigmodel: t.enum(["oauth", "apiKey"]).optional(),
    })
    .partial(),
  Gm = t.enum(["zai", "bigmodel"]),
  Km = t
    .object({
      zai: t.string().trim().min(1).optional(),
      bigmodel: t.string().trim().min(1).optional(),
    })
    .partial();
var Gd = t.object({
    version: A,
    title: A,
    markdown: A,
    releaseDate: A.optional(),
    releaseNotesByLocale: t
      .partialRecord(Tn, t.object({ title: A, markdown: A }))
      .optional(),
  }),
  pS = t.partialRecord(Wm, A).default({}),
  Hm = t.discriminatedUnion("kind", [
    t.object({
      kind: t.literal("ssh"),
      host: A,
      port: t.number().int().positive().max(65535).optional(),
      username: A,
      sshConfigAlias: A.optional(),
      privateKeyPath: t.string().optional(),
      assetInstallMode: t.enum(xr).optional(),
      resourcePackages: t
        .object({
          selectedPackageIds: t.array(t.string().refine(kr)).optional(),
        })
        .optional(),
      passwordCredentialKey: A.optional(),
      privateKeyPassphraseCredentialKey: A.optional(),
    }),
    t.object({
      kind: t.literal("wsl"),
      distro: t.string().optional(),
      user: Pn.optional(),
    }),
    t.object({ kind: t.literal("docker"), container: A }),
    t.object({
      kind: t.literal("server"),
      url: t.string().url(),
      name: A.optional(),
      workspacePath: t.string().optional(),
      serverId: A.optional(),
      tokenCredentialKey: A.optional(),
    }),
  ]),
  Jm = t.discriminatedUnion("kind", [
    t.object({
      kind: t.literal("local"),
      workspacePath: A,
      workspacePurpose: t.enum(["project", "conversation"]).default("project"),
    }),
    t.object({
      kind: t.literal("remote"),
      workspacePath: A,
      localWorkspacePath: A.optional(),
      workspaceIdentity: A.optional(),
      target: Hm,
      lastOpenedAt: t.number().int().nonnegative(),
      lastConnectionStatus: t.enum(["connected", "failed"]),
      lastConnectionError: t.string().optional(),
    }),
  ]),
  Ym = t.object({ deviceSid: A }),
  Xm = t.object({
    workspacePath: A,
    workspaceIdentity: A.optional(),
    initialTaskId: A.optional(),
  }),
  Kd = t.preprocess((e) => {
    if (typeof e != "string") return;
    let o = e.trim();
    if (o)
      try {
        return he(o);
      } catch {
        return;
      }
  }, t.string().optional());
function mS(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e;
  if (!("zcodeEndpointOrigin" in o)) return e;
  let r = Kd.safeParse(o.zcodeEndpointOrigin);
  if (r.success && typeof r.data == "string")
    return { ...o, zcodeEndpointOrigin: r.data };
  let { zcodeEndpointOrigin: a, ...n } = o;
  return n;
}
c(mS, "sanitizeZCodeEndpointOrigin");
function gS(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e;
  return o.optimizeAgentExperienceMigrationInitialized === !0
    ? e
    : {
        ...o,
        optimizeAgentExperienceEnabled: !1,
        optimizeAgentExperienceMigrationInitialized: !0,
      };
}
c(gS, "migrateOptimizeAgentExperienceDefault");
function fS(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e;
  return o.closeToTrayOnWindowsMigrationInitialized === !0
    ? e
    : {
        ...o,
        closeToTrayOnWindows: !0,
        closeToTrayOnWindowsMigrationInitialized: !0,
      };
}
c(fS, "migrateCloseToTrayOnWindowsDefault");
function hS(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e;
  if ("localePreference" in o || !("locale" in o)) return e;
  let r = Tn.safeParse(o.locale);
  return r.success ? { ...o, localePreference: r.data } : e;
}
c(hS, "migrateLegacyLocalePreference");
var yS = t.object({
  id: A,
  workspacePath: A,
  localWorkspacePath: A.optional(),
  workspaceIdentity: A.optional(),
  target: Hm,
  lastOpenedAt: t.number().int().nonnegative(),
  lastConnectionStatus: t.enum(["connected", "failed"]),
  lastConnectionError: t.string().optional(),
});
function bS(e) {
  return !e || typeof e != "object" || Array.isArray(e)
    ? e
    : { ...e, enabledBuiltinAgentCliProviders: [...Ir] };
}
c(bS, "migrateLegacyBuiltinAgentCliProviders");
function Vd(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e;
  if (o.kind !== "ssh" || !("resourcePackages" in o)) return e;
  let { resourcePackages: r, ...a } = o;
  return a;
}
c(Vd, "stripHistoricalRemoteResourcePackages");
function vS(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return e;
  let o = e,
    r = { ...o },
    a = Array.isArray(o.lastWorkspaceSession) ? o.lastWorkspaceSession : [],
    n = a.some((b) =>
      !b || typeof b != "object" || Array.isArray(b) ? !1 : "historyId" in b,
    ),
    i = Array.isArray(o.remoteWorkspaceHistory) ? o.remoteWorkspaceHistory : [],
    s = new Map(
      i.flatMap((b) => {
        let S =
            b && typeof b == "object" && !Array.isArray(b)
              ? { ...b, target: Vd(b.target) }
              : b,
          _ = yS.safeParse(S);
        return _.success ? [[_.data.id, _.data]] : [];
      }),
    ),
    l =
      a.length > 0
        ? a.flatMap((b) => {
            if (!b || typeof b != "object" || Array.isArray(b)) return [];
            let S = b;
            if (S.kind === "local" && typeof S.workspacePath == "string")
              return [
                {
                  kind: "local",
                  workspacePath: S.workspacePath,
                  workspacePurpose:
                    S.workspacePurpose === "conversation"
                      ? "conversation"
                      : "project",
                },
              ];
            if (S.kind === "remote") {
              if (typeof S.workspacePath == "string" && S.target)
                return [{ ...S, target: Vd(S.target) }];
              if (typeof S.historyId == "string") {
                let _ = s.get(S.historyId);
                return _
                  ? [
                      {
                        kind: "remote",
                        workspacePath: _.workspacePath,
                        ...(_.localWorkspacePath
                          ? { localWorkspacePath: _.localWorkspacePath }
                          : {}),
                        ...(_.workspaceIdentity
                          ? { workspaceIdentity: _.workspaceIdentity }
                          : {}),
                        target: Vd(_.target),
                        lastOpenedAt: _.lastOpenedAt,
                        lastConnectionStatus: _.lastConnectionStatus,
                        ...(_.lastConnectionError
                          ? { lastConnectionError: _.lastConnectionError }
                          : {}),
                      },
                    ]
                  : [];
              }
            }
            return [];
          })
        : [],
    p = Array.isArray(o.lastOpenTabs)
      ? o.lastOpenTabs.flatMap((b) =>
          typeof b == "string"
            ? [{ kind: "local", workspacePath: b, workspacePurpose: "project" }]
            : [],
        )
      : [],
    u = new Set(
      l.flatMap((b) =>
        b.kind === "local" && typeof b.workspacePath == "string"
          ? [b.workspacePath]
          : [],
      ),
    ),
    h = [...l, ...p.filter((b) => !u.has(b.workspacePath))];
  return (
    (h.length > 0 || n || Array.isArray(o.lastOpenTabs)) &&
      (r.lastWorkspaceSession = h),
    delete r.lastOpenTabs,
    delete r.remoteWorkspaceHistory,
    r
  );
}
c(vS, "migrateLegacyWorkspaceSession");
var SS = t.object({
    recentProjects: t.array(t.string()).default([]),
    locale: Tn.default("zh-CN"),
    localePreference: Bm.default("system"),
    terminalInheritSystemProfile: t.boolean().default(!0),
    terminalFontFamily: A.optional(),
    integratedTerminalShell: Cr.optional(),
    httpProxy: A.optional(),
    httpProxyNoProxy: A.optional(),
    httpProxyCaCertPath: A.optional(),
    taskAutoArchiveEnabled: t.boolean().default(!1),
    taskAutoArchiveOlderThanDays: t
      .number()
      .int()
      .positive()
      .max(365)
      .default(7),
    closeToTrayOnWindows: t.boolean().default(!0),
    closeToTrayOnWindowsMigrationInitialized: t.boolean().default(!0),
    keepAwakeWhileRunning: t.boolean().default(!1),
    desktopZoomLevel: Fm.optional(),
    desktopChromiumHardwareAccelerationEnabled: t.boolean().default(!0),
    messageStreamShowReasoning: t.boolean().default(!1),
    messageStreamShowTodos: t.boolean().default(!1),
    zcodeInteractionBehavior: Lm.default("queue"),
    askUserQuestionAutoResolutionEnabled: t.boolean().default(!0),
    optimizeAgentExperienceEnabled: t.boolean().default(!1),
    optimizeAgentExperienceMigrationInitialized: t.boolean().default(!0),
    enabledBuiltinAgentCliProviders: qm.default([...Ir]),
    modelProviderFamilyModes: Vm.default({}),
    modelProviderFamilySelectedKeys: Km.default({}),
    providerFamilyDomain: Gm.optional(),
    providerFamilyDomainUpdatedAt: t.number().int().nonnegative().optional(),
    providerFamilyDomainMigrated: t.boolean().default(!1),
    repoSnapshotIndexingEnabled: t.boolean().default(!1),
    repoSnapshotIndexingUserConfigured: t.boolean().optional(),
    instantGrepIndexingEnabled: t.boolean().default(!1),
    nativeSearchEnhancementsEnabled: t.boolean().default(!0),
    memoryEnabled: t.boolean().default(!1),
    lastWorkspaceSession: t.array(Jm).default([]),
    lastActiveTabIndex: t.number().int().nonnegative().default(0),
    lastActiveTaskByWorkspace: t.record(t.string(), t.string()).optional(),
    dataBaseDir: t.string().trim().min(1).optional(),
    pendingPostUpdateReleaseNotes: Gd.optional(),
    receivePreviewUpdates: t.boolean().default(!1),
    autoDownloadAndInstallUpdates: t.boolean().default(!1),
    skippedElectronUpdateVersions: pS,
    settingsSyncFirstRunPromptHandled: t.boolean().optional(),
    webRemoteControlExternalRelayDevice: Ym.optional(),
    webRemoteControlLastEnabledContext: Xm.optional(),
    zcodeEndpointOrigin: Kd.optional(),
  }),
  _S = t.preprocess((e) => fS(gS(hS(mS(vS(bS(e)))))), SS),
  xS = t.object({
    recentProjects: t.array(t.string()).optional(),
    locale: Tn.optional(),
    localePreference: Bm.optional(),
    terminalInheritSystemProfile: t.boolean().optional(),
    terminalFontFamily: A.optional(),
    integratedTerminalShell: Cr.optional(),
    httpProxy: A.optional(),
    httpProxyNoProxy: A.optional(),
    httpProxyCaCertPath: A.optional(),
    taskAutoArchiveEnabled: t.boolean().optional(),
    taskAutoArchiveOlderThanDays: t
      .number()
      .int()
      .positive()
      .max(365)
      .optional(),
    closeToTrayOnWindows: t.boolean().optional(),
    keepAwakeWhileRunning: t.boolean().optional(),
    closeToTrayOnWindowsMigrationInitialized: t.boolean().optional(),
    desktopZoomLevel: Fm.optional(),
    desktopChromiumHardwareAccelerationEnabled: t.boolean().optional(),
    messageStreamShowReasoning: t.boolean().optional(),
    messageStreamShowTodos: t.boolean().optional(),
    zcodeInteractionBehavior: Lm.optional(),
    askUserQuestionAutoResolutionEnabled: t.boolean().optional(),
    optimizeAgentExperienceEnabled: t.boolean().optional(),
    optimizeAgentExperienceMigrationInitialized: t.boolean().optional(),
    enabledBuiltinAgentCliProviders: qm.optional(),
    modelProviderFamilyModes: Vm.optional(),
    modelProviderFamilySelectedKeys: Km.optional(),
    providerFamilyDomain: t.union([Gm, t.literal("")]).optional(),
    providerFamilyDomainUpdatedAt: t.number().int().nonnegative().optional(),
    providerFamilyDomainMigrated: t.boolean().optional(),
    repoSnapshotIndexingEnabled: t.boolean().optional(),
    repoSnapshotIndexingUserConfigured: t.boolean().optional(),
    instantGrepIndexingEnabled: t.boolean().optional(),
    nativeSearchEnhancementsEnabled: t.boolean().optional(),
    memoryEnabled: t.boolean().optional(),
    lastWorkspaceSession: t.array(Jm).optional(),
    lastActiveTabIndex: t.number().int().nonnegative().optional(),
    lastActiveTaskByWorkspace: t.record(t.string(), t.string()).optional(),
    dataBaseDir: t.string().trim().min(1).optional(),
    pendingPostUpdateReleaseNotes: Gd.optional(),
    receivePreviewUpdates: t.boolean().optional(),
    autoDownloadAndInstallUpdates: t.boolean().optional(),
    skippedElectronUpdateVersions: t.partialRecord(Wm, A).optional(),
    settingsSyncFirstRunPromptHandled: t.boolean().optional(),
    webRemoteControlExternalRelayDevice: Ym.optional(),
    webRemoteControlLastEnabledContext: Xm.optional(),
    zcodeEndpointOrigin: Kd.optional(),
  });
var Ut = t.enum([
  "default",
  "yolo",
  "plan",
  "edit",
  "acceptEdits",
  "auto",
  "dontAsk",
  "bypassPermissions",
  "autoEdit",
  "build",
]);
var Be = "builtin:",
  _e = {
    zai: `${Be}zai`,
    zaiCodingPlan: `${Be}zai-coding-plan`,
    zaiStartPlan: `${Be}zai-start-plan`,
    bigmodel: `${Be}bigmodel`,
    bigmodelCodingPlan: `${Be}bigmodel-coding-plan`,
    bigmodelStartPlan: `${Be}bigmodel-start-plan`,
    zapi: `${Be}zapi`,
  };
var SM = ["GLM-5.2", "GLM-5-Turbo"];
var _M = {
  claude: {
    haiku: "GLM-5-Turbo",
    sonnet: "GLM-5-Turbo",
    opus: "GLM-5.2",
    reasoning: "GLM-5.2",
  },
};
var kS = t.object({
    haiku: t.string(),
    sonnet: t.string(),
    opus: t.string(),
    reasoning: t.string(),
  }),
  tg = t.object({ claude: kS.optional() }).catchall(t.unknown()),
  ng = t.enum(["anthropic", "openai", "responses", "gemini"]),
  og = t.enum([
    "anthropic-messages",
    "openai-chat-completions",
    "openai-responses",
  ]),
  tt = t.enum(["anthropic", "openai", "openai-compatible"]),
  IS = t.enum(["china-llm-zcode-dev"]),
  Qm = t.enum(["text", "image", "video", "audio", "pdf"]),
  eg = t.object({ path: t.array(t.string().min(1)).min(1) }),
  CS = t.object({
    set: t.array(eg.extend({ value: t.unknown() })).optional(),
    unset: t.array(eg).optional(),
  }),
  RS = t.object({
    defaultLevel: t.string().min(1).optional(),
    levels: t.record(t.string().min(1), t.partialRecord(tt, CS)),
  }),
  rg = t.partialRecord(tt, t.string()),
  PS = t.object({ baseURL: t.string(), paths: rg }),
  ig = t.object({
    id: t.string().min(1),
    name: t.string().optional(),
    kinds: t.array(tt),
    defaultKind: tt.optional(),
    modelIdByKind: t.partialRecord(tt, t.string().min(1)).optional(),
    modalities: t.object({ input: t.array(Qm), output: t.array(Qm) }),
    contextWindow: t.number().int().positive(),
    maxOutputTokens: t.number().int().positive().optional(),
    reasoning: RS.optional(),
    priority: t.number().finite().optional(),
  }),
  TS = t.object({
    id: t.string().min(1),
    name: t.string().min(1),
    endpoints: PS,
    defaultKind: tt.optional(),
    models: t.array(ig),
  }),
  wS = t.object({
    schemaVersion: t.literal("zcode.model-providers.v1"),
    providers: t.array(TS),
  }),
  ES = ig.extend({
    disabledReason: t.string().optional(),
    supportsTools: t.boolean().optional(),
    supportsStructuredOutput: t.boolean().optional(),
    modified: t.boolean().optional(),
    deleted: t.boolean().optional(),
  }),
  ag = t.enum(["builtin", "models-dev", "custom", "workspace"]),
  sg = t.enum([
    "coding_plan_not_authenticated",
    "coding_plan_not_connected",
    "coding_plan_auth_failed",
    "coding_plan_not_entitled",
    "oauth_provider_inactive",
  ]),
  cg = t.object({
    anthropic: t.string().default(""),
    openai: t.string().default(""),
    gemini: t.string().default(""),
  }),
  OS = cg.extend({
    anthropic: t.string().optional(),
    openai: t.string().optional(),
    gemini: t.string().optional(),
    baseURL: t.string().optional(),
    paths: rg.optional(),
  }),
  AS = t.object({
    id: t.string(),
    name: t.string(),
    enabled: t.boolean().optional(),
    systemDisabledReason: sg.optional(),
    endpoints: cg,
    apiFormat: og.optional(),
    source: ag.optional(),
    modelsDevProviderId: t.string().optional(),
    apiKeyRequired: t.boolean().optional(),
    headers: t.record(t.string(), t.string()).optional(),
    logoUrl: t.string().optional(),
    apiKey: t.string(),
    apiKeyUrl: t.string().optional(),
    models: t.array(t.string()).default([]),
    modelDisplayNames: t.record(t.string(), t.string()).optional(),
    modelSupportedFormats: t.record(t.string(), t.array(ng)).optional(),
    providerMappings: tg.optional(),
    createdAt: t.number(),
    updatedAt: t.number(),
  }),
  xM = t.array(AS),
  zS = t.object({
    id: t.string(),
    name: t.string(),
    enabled: t.boolean().optional(),
    systemDisabledReason: sg.optional(),
    endpoints: OS,
    apiFormat: og.optional(),
    source: ag.optional(),
    catalogSourceId: IS.optional(),
    catalogProviderId: t.string().optional(),
    modelsDevProviderId: t.string().optional(),
    apiKeyRequired: t.boolean().optional(),
    headers: t.record(t.string(), t.string()).optional(),
    logoUrl: t.string().optional(),
    apiKey: t.string(),
    apiKeyUrl: t.string().optional(),
    defaultKind: tt.optional(),
    models: t.array(ES).default([]),
    modelDisplayNames: t.record(t.string(), t.string()).optional(),
    modelSupportedFormats: t.record(t.string(), t.array(ng)).optional(),
    providerMappings: tg.optional(),
    createdAt: t.number(),
    updatedAt: t.number(),
  }),
  MS = t.array(zS),
  $S = t.object({
    schemaVersion: t.literal("zcode.model-providers.v2"),
    providers: MS,
  }),
  kM = t.object({
    providerIds: t.array(t.string().min(1)),
    updatedAt: t.number().int().nonnegative(),
  });
var DS = "ZCode Protocol",
  US = 1;
var d = t.string().trim().min(1),
  L = t.record(t.string(), t.unknown()),
  te = t.number().int().nonnegative(),
  Rr = t.union([te, d, t.date()]),
  NS = t
    .object({
      kind: t.literal("node_repl_images"),
      images: t
        .array(
          t
            .object({
              base64: t
                .string()
                .min(1)
                .max(200 * 1024),
              mimeType: t.string().regex(/^image\/[a-z0-9.+-]+$/iu),
            })
            .strict(),
        )
        .min(1)
        .max(2),
      truncated: t.boolean().optional(),
      source: t.literal("browser_turn_end").optional(),
    })
    .strict(),
  ZS = L.superRefine((e, o) => {
    let r = e.display;
    if (
      typeof r != "object" ||
      r === null ||
      Array.isArray(r) ||
      r.kind !== "node_repl_images"
    )
      return;
    let a = NS.safeParse(r);
    if (!a.success)
      for (let n of a.error.issues)
        o.addIssue({ ...n, path: ["display", ...n.path] });
  }),
  Yd = t.union([t.string(), t.number().int()]),
  pg = t
    .object({
      traceId: d.optional(),
      parentId: d.optional(),
      spanId: d.optional(),
      traceparent: d.optional(),
    })
    .strict(),
  jS = t
    .object({
      id: Yd,
      method: d,
      params: t.unknown().optional(),
      trace: pg.optional(),
    })
    .strict(),
  BS = t
    .object({ method: d, params: t.unknown().optional(), trace: pg.optional() })
    .strict(),
  LS = t.object({ id: Yd, result: t.unknown() }).strict(),
  WS = t
    .object({
      id: Yd,
      error: t
        .object({
          code: t.number().int(),
          message: d,
          data: t.unknown().optional(),
        })
        .strict(),
    })
    .strict(),
  u$ = t.union([jS, BS, LS, WS]);
var mg = t
    .object({
      platform: t.enum([
        "aix",
        "android",
        "darwin",
        "freebsd",
        "haiku",
        "linux",
        "netbsd",
        "openbsd",
        "sunos",
        "win32",
        "cygwin",
      ]),
      arch: t.enum([
        "arm",
        "arm64",
        "ia32",
        "loong64",
        "mips",
        "mipsel",
        "ppc",
        "ppc64",
        "riscv64",
        "s390",
        "s390x",
        "x64",
      ]),
      logicalCpuCount: t.number().int().positive().max(4096),
      intervalMs: t
        .number()
        .int()
        .positive()
        .max(10080 * 60 * 1e3),
      cpuCores: t.number().finite().nonnegative().max(4096),
      cpuPercent: t.number().finite().nonnegative().max(1e5),
      rssKb: t.number().finite().nonnegative().max(Number.MAX_SAFE_INTEGER),
    })
    .strict(),
  FS = Dd,
  gg = t.enum(["immediate", "deferred"]),
  Xd = t
    .object({
      optionId: d,
      kind: d,
      name: d,
      description: t.string().optional(),
      response: Dt,
    })
    .strict(),
  lg = t.object({ name: d, value: t.string() }).strict(),
  qS = t.union([
    t
      .object({
        type: t.literal("client_credentials"),
        clientId: d,
        clientSecret: d,
        clientName: d.optional(),
        scope: t.string().optional(),
      })
      .strict(),
    t
      .object({
        type: t.literal("authorization_code"),
        clientId: d.optional(),
        clientSecret: d.optional(),
        clientName: d.optional(),
        redirectPath: d.optional(),
        scope: t.string().optional(),
      })
      .strict(),
  ]),
  Qd = t.union([
    t
      .object({
        name: d,
        command: d,
        args: t.array(t.string()),
        env: t.array(lg),
        isolation: t.enum(["session", "workspace"]).optional(),
        protocolVersion: t.enum(["legacy", "auto", "2026-07-28"]).optional(),
        timeoutMs: t.number().int().positive().optional(),
      })
      .strict(),
    t
      .object({
        name: d,
        type: t.enum(["http", "sse"]),
        url: d,
        headers: t.array(lg),
        oauth: qS.optional(),
        isolation: t.enum(["session", "workspace"]).optional(),
        protocolVersion: t.enum(["legacy", "auto", "2026-07-28"]).optional(),
        timeoutMs: t.number().int().positive().optional(),
      })
      .strict(),
  ]),
  VS = t.enum([
    "connecting",
    "connected",
    "disabled",
    "disconnected",
    "failed",
    "untrusted",
  ]),
  GS = t
    .object({
      status: VS,
      transport: t.enum(["stdio", "http", "sse"]),
      toolCount: t.number().int().nonnegative(),
      updatedAt: d,
      error: t.string().optional(),
      protocolEra: t.enum(["legacy", "modern"]).optional(),
      authorization: t
        .object({
          type: t.literal("oauth_authorization_code"),
          authorizationUrl: d,
          startedAt: d,
        })
        .strict()
        .optional(),
    })
    .strict(),
  KS = t.enum(["connect", "status"]),
  HS = t
    .object({
      workspace: M,
      mcpServers: t.array(Qd).optional(),
      mode: KS.default("connect"),
    })
    .strict(),
  JS = t.object({ statuses: t.record(t.string(), GS) }).strict(),
  YS = t
    .object({
      role: t.enum(["user", "assistant"]),
      content: t.string(),
      timestamp: te.optional(),
    })
    .strict(),
  XS = t
    .object({
      source: t.literal("claudeCode"),
      title: t.string().optional(),
      createdAt: te.optional(),
      updatedAt: te.optional(),
      messages: t.array(YS).min(1),
    })
    .strict(),
  fg = t
    .object({ value: d, label: d, description: t.string().optional() })
    .strict(),
  hg = t
    .object({
      enabled: t.boolean(),
      levels: t.array(fg),
      defaultLevel: d.optional(),
      providerOptionsByLevel: t.record(d, L).optional(),
    })
    .strict(),
  yg = t
    .object({
      ref: F,
      label: d,
      providerLabel: d.optional(),
      providerSource: t.string().optional(),
      providerLogoUrl: d.optional(),
      description: t.string().optional(),
      contextWindow: t.number().int().positive().optional(),
      maxOutputTokens: t.number().int().positive().optional(),
      reasoning: hg.optional(),
      supportsImages: t.boolean().optional(),
      supportsPdf: t.boolean().optional(),
      supportsTools: t.boolean().optional(),
      supportsStructuredOutput: t.boolean().optional(),
      disabledReason: t.string().optional(),
    })
    .strict(),
  bg = t.enum(["anthropic", "openai", "openai-compatible"]),
  vg = t.enum([
    "anthropic-messages",
    "openai-chat-completions",
    "openai-responses",
  ]),
  Sg = t.enum([
    "builtin",
    "models-dev",
    "custom",
    "user",
    "workspace",
    "ephemeral",
  ]),
  QS = t.discriminatedUnion("source", [
    t.object({ source: t.literal("credential"), key: d }).strict(),
    t.object({ source: t.literal("env"), name: d }).strict(),
    t.object({ source: t.literal("server-config"), key: d }).strict(),
    t.object({ source: t.literal("session-secret"), key: d }).strict(),
  ]),
  e_ = t.discriminatedUnion("source", [
    t.object({ source: t.literal("credential"), key: d }).strict(),
    t.object({ source: t.literal("env"), name: d }).strict(),
    t.object({ source: t.literal("server-config"), key: d }).strict(),
    t.object({ source: t.literal("inline"), value: d }).strict(),
  ]),
  _g = t
    .object({
      modelId: d,
      label: d.optional(),
      description: t.string().optional(),
      contextWindow: t.number().int().positive().optional(),
      maxOutputTokens: t.number().int().positive().optional(),
      reasoning: hg.optional(),
      supportsImages: t.boolean().optional(),
      supportsPdf: t.boolean().optional(),
      supportsTools: t.boolean().optional(),
      supportsStructuredOutput: t.boolean().optional(),
      providerOptions: L.optional(),
      disabledReason: t.string().optional(),
    })
    .strict(),
  t_ = t
    .object({
      providerId: d,
      kind: bg,
      apiFormat: vg.optional(),
      label: d.optional(),
      source: Sg.default("workspace"),
      baseURL: d.optional(),
      apiKeyRef: QS.optional(),
      apiKeyRequired: t.boolean().optional(),
      headers: t.record(t.string(), t.string()).optional(),
      providerOptions: L.optional(),
      logoUrl: d.optional(),
      modelsDevProviderId: d.optional(),
      models: t.array(_g),
      disabledReason: t.string().optional(),
      updatedAt: te.optional(),
    })
    .strict(),
  eu = t
    .object({
      providerId: d,
      kind: bg,
      apiFormat: vg.optional(),
      label: d.optional(),
      source: Sg.default("workspace"),
      baseURL: d.optional(),
      apiKey: e_.optional(),
      apiKeyRequired: t.boolean().optional(),
      headers: t.record(t.string(), t.string()).optional(),
      providerOptions: L.optional(),
      logoUrl: d.optional(),
      modelsDevProviderId: d.optional(),
      models: t.array(_g).min(1),
    })
    .strict(),
  Te = t
    .object({
      revision: d,
      generatedAt: te,
      model: F,
      provider: eu,
      thoughtLevel: d.optional(),
    })
    .strict(),
  p$ = t
    .object({
      sessionId: d,
      appliedModelRuntimeRevision: d,
      changed: t.boolean(),
    })
    .strict();
var n_ = t
    .object({
      revision: t.number().int().nonnegative(),
      providerRevision: d.optional(),
      providers: t.array(t_),
      available: t.array(yg),
      defaultModel: F.optional(),
      lastUsed: F.optional(),
    })
    .strict(),
  xg = t
    .object({
      content: d,
      status: t.enum(["pending", "in_progress", "completed"]),
      priority: t.enum(["high", "medium", "low"]),
    })
    .strict(),
  o_ = t
    .object({
      timeUsedSeconds: t.number().int().nonnegative(),
      tokensUsed: t.number().int().nonnegative(),
      tokenBudget: t.number().int().positive().nullable(),
      contextUsed: t.number().int().nonnegative(),
      contextWindow: t.number().int().nonnegative(),
      toolCallCount: t.number().int().nonnegative(),
      iterationCount: t.number().int().nonnegative(),
    })
    .strict(),
  r_ = t
    .object({
      id: d,
      source: t.enum(["goal_iteration", "session"]),
      goalIteration: t.number().int().positive().optional(),
      targetId: d.optional(),
      startedAt: te.optional(),
      updatedAt: te.optional(),
      todos: t.array(xg),
    })
    .strict(),
  kg = t
    .object({
      appliedProviderRevision: d.optional(),
      model: t
        .object({ current: F, available: t.array(yg), lastUsed: F.optional() })
        .strict(),
      thoughtLevel: t
        .object({
          enabled: t.boolean(),
          current: d.optional(),
          defaultLevel: d.optional(),
          available: t.array(fg),
        })
        .strict(),
      mode: t.object({ current: Pe }).strict(),
      permission: t
        .object({
          mode: Pe.optional(),
          rulesRevision: t.number().int().nonnegative().optional(),
        })
        .strict()
        .optional(),
    })
    .strict(),
  i_ = t
    .object({
      requestId: d,
      toolCallId: d,
      toolName: d,
      reason: t.string(),
      riskLevel: t.enum(["low", "medium", "high", "critical"]),
      input: t.unknown().optional(),
      origin: et.optional(),
      options: t.array(Xd).min(1),
      requestedAt: te,
    })
    .strict(),
  a_ = t
    .object({
      toolCallId: d,
      toolName: d,
      status: t.enum(["pending", "running", "completed", "failed", "denied"]),
      startedAt: te.optional(),
    })
    .strict(),
  s_ = t
    .object({
      sessionId: d,
      status: Zd,
      mode: Pe,
      turnCount: t.number().int().nonnegative(),
      totalTokenCount: t.number().int().nonnegative(),
      contextUsed: t.number().int().nonnegative(),
      contextWindow: t.number().int().nonnegative(),
      currentTurnId: d.optional(),
      pendingPermissions: t.array(i_),
      activeToolCalls: t.array(a_),
      backgroundJobs: t.array(L),
      target: jd.nullable().optional(),
      lastError: t
        .object({
          type: d,
          code: d.optional(),
          message: d,
          detail: t.string().optional(),
        })
        .strict()
        .optional(),
    })
    .strict(),
  Ig = t
    .object({
      name: d,
      description: t.string(),
      inputHint: t.string().optional(),
      source: t.enum(["builtin", "custom"]).optional(),
    })
    .strict(),
  c_ = t.enum([
    "start",
    "finish",
    "error",
    "text_start",
    "text_delta",
    "text_end",
    "reasoning_start",
    "reasoning_delta",
    "reasoning_end",
    "tool_input_start",
    "tool_input_delta",
    "tool_input_end",
    "tool_call",
  ]),
  l_ = t
    .object({
      assistantMessageId: t.string().optional(),
      delta: t.string().optional(),
      done: t.boolean().optional(),
      input: t.unknown().optional(),
      kind: c_,
      partId: t.string().optional(),
      providerExecuted: t.boolean().optional(),
      toolCallId: t.string().optional(),
      toolName: t.string().optional(),
    })
    .strict(),
  Pr = t
    .object({
      protocol: t
        .object({ name: t.literal(DS), version: t.literal(US) })
        .strict(),
      session: Bd,
      settings: kg,
      projection: s_,
      runtime: Zm,
      messages: t.array(Wd),
      goalStats: o_.optional(),
      todos: t.array(xg).optional(),
      todoGroups: t.array(r_).optional(),
      slashCommands: t.array(Ig).optional(),
    })
    .strict(),
  d_ = t
    .object({
      eventId: d,
      sessionId: d,
      turnId: d.optional(),
      seq: t.number().int().nonnegative(),
      traceId: d.optional(),
      timestamp: te,
      deliveryKind: Rn.optional(),
    })
    .strict(),
  m$ = t.enum([
    "session.created",
    "session.resumed",
    "session.updated",
    "session.titleUpdated",
    "session.closed",
    "turn.started",
    "turn.steerQueued",
    "turn.steerDrained",
    "turn.completed",
    "turn.failed",
    "message.upserted",
    "message.removed",
    "part.started",
    "part.delta",
    "part.upserted",
    "part.removed",
    "model.streaming",
    "tool.updated",
    "permission.requested",
    "permission.resolved",
    "userInput.requested",
    "userInput.resolved",
    "checkpoint.created",
    "rewind.triggered",
    "streamRecovery.updated",
  ]),
  Cg = t
    .object({
      type: d,
      message: d,
      stack: t.string().optional(),
      code: t.string().optional(),
      detail: t.string().optional(),
      retryable: t.boolean().optional(),
      data: t.unknown().optional(),
    })
    .strict(),
  u_ = t
    .object({ mode: Pe, contextWindow: t.number().int().nonnegative() })
    .strict(),
  p_ = t
    .object({
      directory: d,
      interruptedToolCount: t.number().int().nonnegative(),
      messageCount: t.number().int().nonnegative(),
      partCount: t.number().int().nonnegative(),
      recoveredCompactTimelineCount: t.number().int().nonnegative().optional(),
      recoveredSteerInputCount: t.number().int().nonnegative().optional(),
      resumedTodoCount: t.number().int().nonnegative().optional(),
    })
    .strict(),
  m_ = t
    .object({
      messageID: d.optional(),
      modelRef: L.optional(),
      previousTitle: t.string(),
      source: t.enum(["default", "first_input", "generated", "custom"]),
      title: t.string(),
    })
    .strict(),
  g_ = t
    .object({
      turnNumber: t.number().int().nonnegative(),
      input: t.string(),
      inputId: d.optional(),
      queryId: d.optional(),
      inputSource: FS.optional(),
      inputVisibility: $d.optional(),
      executionKind: t.enum(["agent", "controlOnly"]).optional(),
      targetId: d.optional(),
      messageId: d.optional(),
      foregroundExecutionId: d.optional(),
      intent: L.optional(),
      originMeta: L.optional(),
      attachments: t.array(L).optional(),
    })
    .strict(),
  f_ = t.literal("plan_approval_feedback"),
  h_ = t.enum(["sendText", "sendGoalCommand", "compact"]),
  Rg = t.enum(["queue", "guide"]),
  y_ = t
    .object({
      pendingInputId: d,
      inputId: d.optional(),
      queryId: d.optional(),
      input: t.string(),
      inputPreview: t.string(),
      inputSize: t.number().int().nonnegative(),
      commandKind: h_.optional(),
      source: f_.optional(),
      toolDisallowlist: t.array(d).optional(),
      delivery: Rg.optional(),
      targetTurnId: d,
      queueLength: t.number().int().nonnegative(),
      intent: L.optional(),
    })
    .strict(),
  b_ = t
    .object({
      pendingInputIds: t.array(d),
      queryIds: t.array(d).optional(),
      targetTurnId: d,
      injectedMessageIds: t.array(d),
      drainedInputs: t
        .array(
          t
            .object({
              pendingInputId: d,
              messageId: d,
              text: t.string(),
              delivery: Rg.optional(),
              intent: L.optional(),
              toolDisallowlist: t.array(d).optional(),
            })
            .strict(),
        )
        .optional(),
    })
    .strict(),
  v_ = t
    .object({
      response: t.string(),
      tokenCount: t.number().int().nonnegative(),
      usage: t.unknown().optional(),
      toolCallCount: t.number().int().nonnegative(),
      historyRoundCount: t.number().int().nonnegative().optional(),
      duration: t.number().nonnegative(),
      cacheStats: t
        .object({
          totalMessages: t.number().int().nonnegative(),
          cachedMessages: t.number().int().nonnegative(),
          lastCacheHit: t.boolean(),
          cacheReadTokens: t.number().int().nonnegative().optional(),
        })
        .strict()
        .optional(),
      inputId: d.optional(),
      resultType: t.enum([
        "success",
        "cancelled",
        "error_max_turns",
        "error_max_budget",
        "error_during_execution",
        "error_max_tool_calls",
      ]),
    })
    .strict(),
  S_ = t
    .object({ error: Cg, turnPhase: t.string(), inputId: d.optional() })
    .strict(),
  __ = t
    .object({
      content: t.string(),
      attachments: t.array(t.unknown()).optional(),
      toolCalls: t.array(t.unknown()).optional(),
      type: t.string().optional(),
      compactBoundary: t.unknown().optional(),
    })
    .strict(),
  x_ = t.object({ messageId: d, reason: t.string().optional() }).strict(),
  k_ = t
    .object({
      messageId: d,
      partId: d,
      field: t.enum(["text", "reasoning", "input", "output"]).optional(),
      delta: t.string(),
    })
    .strict(),
  dg = t.object({ part: Ld }).strict(),
  I_ = t
    .object({ messageId: d, partId: d, reason: t.string().optional() })
    .strict(),
  Nt = t
    .object({
      toolCallId: d,
      toolName: t.string().optional(),
      parentToolCallId: d.optional(),
      source: t.enum(["subagent"]).optional(),
      agentId: d.optional(),
      agentType: d.optional(),
      childSessionId: d.optional(),
      childToolCallId: d.optional(),
      description: t.string().optional(),
    })
    .strict(),
  C_ = t.discriminatedUnion("kind", [
    Nt.extend({
      kind: t.literal("scheduled"),
      toolName: d,
      input: t.unknown().optional(),
      inputByteLength: t.number().int().nonnegative().optional(),
      inputOmitted: t.boolean().optional(),
      inputRef: t.literal("model_stream").optional(),
      dependencies: t.array(d).optional(),
      parallelGroupIndex: t.number().int().nonnegative().optional(),
      canRunParallel: t.boolean().optional(),
      schedule: L.optional(),
    }).strict(),
    Nt.extend({ kind: t.literal("started"), startedAt: Rr }).strict(),
    Nt.extend({
      kind: t.literal("progress"),
      elapsedMs: t.number().nonnegative().optional(),
      pid: t.number().int().optional(),
      stdoutBytes: t.number().int().nonnegative().optional(),
      stderrBytes: t.number().int().nonnegative().optional(),
      outputBytes: t.number().int().nonnegative().optional(),
      stdoutTail: t.string().optional(),
      stderrTail: t.string().optional(),
    }).strict(),
    Nt.extend({
      kind: t.literal("result"),
      result: ZS,
      duration: t.number().nonnegative(),
    }).strict(),
    Nt.extend({ kind: t.literal("error"), error: Cg }).strict(),
    t
      .object({
        kind: t.literal("batch"),
        toolCallIds: t.array(d),
        successCount: t.number().int().nonnegative(),
        errorCount: t.number().int().nonnegative(),
      })
      .strict(),
    Nt.extend({ kind: t.literal("raw"), payload: L }).strict(),
  ]),
  R_ = t
    .object({
      requestId: d.optional(),
      toolCallId: d,
      toolName: d,
      riskLevel: t.enum(["low", "medium", "high", "critical"]),
      reason: t.string(),
      input: t.unknown(),
      suggestedPermissionUpdates: t.array(Nd).optional(),
      origin: et.optional(),
      options: t.array(Xd).min(1),
    })
    .strict(),
  P_ = t
    .object({
      requestId: d.optional(),
      toolCallId: d,
      toolName: d.optional(),
      decision: Ud.optional(),
      reason: t.string().optional(),
      modifiedInput: t.unknown().optional(),
      inputSummary: t.unknown().optional(),
    })
    .strict(),
  T_ = t
    .object({
      requestId: d,
      prompt: t.string(),
      inputType: t.enum(["text", "choice", "confirm"]).optional(),
      choices: t.array(t.string()).optional(),
    })
    .strict(),
  w_ = t
    .object({
      requestId: d,
      value: t.unknown().optional(),
      cancelled: t.boolean().optional(),
    })
    .strict(),
  E_ = t.object({ reason: t.string().optional() }).strict();
function j(e, o) {
  return d_.extend({ type: t.literal(e), payload: o.optional() });
}
c(j, "zcodeSessionEventEnvelopeFor");
var Pg = t.discriminatedUnion("type", [
    j("session.created", u_),
    j("session.resumed", p_),
    j("session.updated", L),
    j("session.titleUpdated", m_),
    j("session.closed", E_),
    j("turn.started", g_),
    j("turn.steerQueued", y_),
    j("turn.steerDrained", b_),
    j("turn.completed", v_),
    j("turn.failed", S_),
    j("message.upserted", __),
    j("message.removed", x_),
    j("part.started", dg),
    j("part.delta", k_),
    j("part.upserted", dg),
    j("part.removed", I_),
    j("model.streaming", l_),
    j("tool.updated", C_),
    j("permission.requested", R_),
    j("permission.resolved", P_),
    j("userInput.requested", T_),
    j("userInput.resolved", w_),
    j("checkpoint.created", L),
    j("rewind.triggered", L),
    j("streamRecovery.updated", L),
  ]),
  g$ = t.object({ events: t.array(Pg) }).strict(),
  f$ = t.object({ messages: t.array(Wd) }).strict(),
  h$ = t
    .object({
      type: t.literal("state.updated"),
      scope: t.enum(["server", "workspace", "session"]),
      workspace: M.optional(),
      sessionId: d.optional(),
      revision: t.number().int().nonnegative(),
      reason: t.string().optional(),
      patch: t.unknown(),
    })
    .strict(),
  y$ = t
    .object({
      sessionId: d,
      deliveryKind: Rn,
      afterSeq: t.number().int().nonnegative().optional(),
      includeSnapshot: t.boolean().default(!1),
    })
    .strict(),
  b$ = t
    .object({
      sessionId: d,
      eventSeq: t.number().int().nonnegative(),
      events: t.array(Pg),
      snapshot: Pr.optional(),
    })
    .strict(),
  v$ = t.object({ sessions: t.array(Bd) }).strict(),
  Tg = t
    .object({
      childSessionId: d,
      agentId: d.optional(),
      toolCallId: d.optional(),
      subagentType: d,
      title: d,
      summary: t.string().optional(),
      startedAt: t.number().int().nonnegative().optional(),
      endedAt: t.number().int().nonnegative().optional(),
    })
    .strict(),
  O_ = Tg.extend({ status: t.enum(["running", "waiting", "blocked"]) }),
  A_ = Tg.extend({
    status: t.enum(["success", "failed", "cancelled", "lost"]),
  }),
  S$ = t
    .object({
      revision: t.number().int().nonnegative(),
      childSessionIds: t.array(d),
      running: t.array(O_),
      ended: t
        .object({
          total: t.number().int().nonnegative(),
          items: t.array(A_),
          nextCursor: d.optional(),
        })
        .strict(),
    })
    .strict(),
  z_ = t
    .object({
      workspace: M,
      settings: kg,
      modelCatalog: n_.optional(),
      slashCommands: t.array(Ig).optional(),
    })
    .strict(),
  _$ = t
    .object({
      sessionId: d.optional(),
      workspace: M,
      parentSessionId: d.optional(),
      mode: Pe.optional(),
      model: F.optional(),
      runtimeModel: Te.optional(),
      persistence: gg.optional(),
      thoughtLevel: d.optional(),
      titleGenerationEnabled: t.boolean().optional(),
      mcpServers: t.array(Qd).optional(),
      toolAllowlist: t.array(d).optional(),
      toolDenylist: t.array(d).optional(),
      importedHistory: XS.optional(),
    })
    .strict(),
  x$ = t
    .object({
      sessionId: d,
      workspace: M.optional(),
      runtimeModel: Te.optional(),
      thoughtLevel: d.optional(),
      mcpServers: t.array(Qd).optional(),
      toolAllowlist: t.array(d).optional(),
      toolDenylist: t.array(d).optional(),
    })
    .strict(),
  k$ = t
    .object({
      workspace: M.optional(),
      includeArchived: t.boolean().default(!1),
      limit: t.number().int().positive().optional(),
    })
    .strict(),
  I$ = t
    .object({
      sessionId: d,
      endedCursor: d.optional(),
      endedLimit: t.number().int().positive().max(100).default(20),
    })
    .strict(),
  C$ = t
    .object({ range: t.enum(Md), timeZone: t.string().optional() })
    .strict();
var R$ = t.object({ sessionId: d }).strict(),
  P$ = t
    .object({
      sessionId: d,
      totalTokens: t.number().int().nonnegative(),
      inputTokens: t.number().int().nonnegative(),
      outputTokens: t.number().int().nonnegative(),
      reasoningTokens: t.number().int().nonnegative(),
      cacheCreationTokens: t.number().int().nonnegative(),
      cacheReadTokens: t.number().int().nonnegative(),
      modelRequestCount: t.number().int().nonnegative(),
      modelErrorCount: t.number().int().nonnegative(),
      inputBaselineBySource: t.record(
        t.string(),
        t.number().int().nonnegative(),
      ),
    })
    .strict(),
  T$ = t
    .object({
      sessionId: d,
      deliveryKind: Rn.optional(),
      messageLimit: t.number().int().positive().optional(),
      afterSeq: t.number().int().nonnegative().optional(),
    })
    .strict(),
  w$ = t
    .object({
      sessionId: d,
      afterMessageId: d.optional(),
      limit: t.number().int().positive().optional(),
    })
    .strict(),
  E$ = t
    .object({
      sessionId: d,
      afterSeq: t.number().int().nonnegative().optional(),
      limit: t.number().int().positive().optional(),
    })
    .strict(),
  M_ = t.enum(["runtime-materialization", "user-execution"]);
var O$ = t.object({ sessionId: d, scope: M_ }).strict(),
  $_ = "preflight-v1",
  D_ = t.enum(["legacy", "preflight-v1"]),
  A$ = t
    .object({
      nativeSearchEnhancementsEnabled: t.boolean(),
      memoryEnabled: t.boolean().default(!1),
      askUserQuestionAutoResolutionEnabled: t.boolean().default(!0),
      integratedTerminalShell: Cr.optional(),
      modelContextBudgetStrategy: D_.default($_),
    })
    .strict(),
  U_ = t
    .object({
      tabCount: t.number().int().positive().max(100),
      currentUrl: t.string().trim().min(1).max(4096).optional(),
    })
    .strict(),
  z$ = t
    .object({
      sessionId: d,
      inputId: d.optional(),
      queryId: d.optional(),
      content: t.string(),
      attachments: t.array(L).optional(),
      browserAmbientContext: U_.optional(),
      expectedRevision: t.number().int().nonnegative().optional(),
      expectedProviderRevision: d.optional(),
      expectedModelRuntimeRevision: d.optional(),
      runtimeModel: Te.optional(),
      automationId: d.optional(),
      offPeakTaskId: d.optional(),
      offPeakRunType: t.enum(["init", "resume"]).optional(),
      botDeliveryTarget: Fd.optional(),
      toolDenylist: t.array(d).optional(),
    })
    .strict()
    .superRefine((e, o) => {
      (e.automationId &&
        e.offPeakTaskId &&
        o.addIssue({
          code: t.ZodIssueCode.custom,
          message: "automationId and offPeakTaskId are mutually exclusive",
        }),
        e.offPeakRunType &&
          !e.offPeakTaskId &&
          o.addIssue({
            code: t.ZodIssueCode.custom,
            message: "offPeakRunType requires offPeakTaskId",
            path: ["offPeakRunType"],
          }));
    }),
  M$ = t
    .object({
      sessionId: d,
      accepted: t.literal(!0),
      stateRevision: t.number().int().nonnegative(),
      modelRuntimeRevision: d.optional(),
    })
    .strict(),
  N_ = t.discriminatedUnion("kind", [
    t
      .object({
        kind: t.literal("turn"),
        turnIndex: t.number().int().nonnegative(),
      })
      .strict(),
    t.object({ kind: t.literal("message"), messageId: d }).strict(),
    t.object({ kind: t.literal("checkpoint"), checkpointId: d }).strict(),
    t.object({ kind: t.literal("latestCheckpoint") }).strict(),
  ]),
  $$ = t
    .object({
      sessionId: d,
      target: N_.default({ kind: "latestCheckpoint" }),
      expectedRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  D$ = t
    .object({
      forkedSessionId: d,
      parentSessionId: d.optional(),
      targetMessageId: d.optional(),
      targetCheckpointId: d.optional(),
      response: t.string(),
      snapshot: Pr,
    })
    .strict(),
  U$ = t
    .object({
      sessionId: d,
      inputId: d.optional(),
      instructions: t.string().optional(),
      expectedRevision: t.number().int().nonnegative().optional(),
      runtimeModel: Te.optional(),
    })
    .strict(),
  N$ = t
    .object({
      response: t.string(),
      snapshot: Pr,
      compact: t
        .object({
          state: t.enum(["accepted", "already_running"]),
          inputId: d.optional(),
          operationId: d.optional(),
        })
        .strict()
        .optional(),
    })
    .strict(),
  Z_ = t.enum(["show", "set", "replace", "pause", "resume", "clear"]),
  Z$ = t
    .object({
      sessionId: d,
      inputId: d.optional(),
      action: Z_,
      objective: t.string().optional(),
      expectedRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  j$ = t
    .object({
      response: t.string(),
      snapshot: Pr,
      startedTurn: t.boolean().optional(),
    })
    .strict(),
  B$ = t.object({ sessionId: d }).strict(),
  wg = t.enum([
    "running",
    "completed",
    "failed",
    "timed_out",
    "cancelled",
    "spawn_error",
    "lost",
  ]),
  j_ = t
    .object({
      taskId: d,
      toolCallId: d.optional(),
      toolName: d.optional(),
      taskKind: t.enum(["bash", "subagent"]).optional(),
      blocked: t.boolean().optional(),
      blockedReason: t.string().optional(),
      cancellable: t.boolean().optional(),
      cancelRequestedAt: Rr.optional(),
      command: t.string().optional(),
      description: t.string().optional(),
      status: wg,
      pid: t.number().int().positive().optional(),
      startedAt: Rr.optional(),
      completedAt: Rr.optional(),
      outputPath: t.string().optional(),
      stderrPersistedOutputPath: t.string().optional(),
      stdoutPersistedOutputPath: t.string().optional(),
      outputBytes: t.number().int().nonnegative().optional(),
      outputTruncated: t.boolean().optional(),
      outputTail: t.string().optional(),
      stderrBytes: t.number().int().nonnegative().optional(),
      stderrTail: t.string().optional(),
      stdoutBytes: t.number().int().nonnegative().optional(),
      stdoutTail: t.string().optional(),
      terminalId: d.optional(),
    })
    .strict(),
  L$ = t.object({ sessionId: d, taskId: d }).strict(),
  W$ = t
    .object({
      cancelled: t.boolean(),
      reason: t.string().optional(),
      snapshot: j_.optional(),
      status: wg,
      taskId: d,
    })
    .strict(),
  F$ = t
    .object({
      sessionId: d,
      model: F,
      runtimeModel: Te.optional(),
      expectedRevision: t.number().int().nonnegative().optional(),
      persistAsWorkspaceLastUsed: t.boolean().default(!0),
    })
    .strict(),
  q$ = t
    .object({
      sessionId: d,
      thoughtLevel: d.optional(),
      runtimeModel: Te.optional(),
      expectedRevision: t.number().int().nonnegative().optional(),
      persistAsWorkspaceLastUsed: t.boolean().default(!0),
    })
    .strict(),
  V$ = t
    .object({
      sessionId: d,
      runtimeModel: Te,
      applyModelSelection: t.boolean().default(!0),
    })
    .strict(),
  G$ = t
    .object({
      sessionId: d,
      mode: Pe,
      expectedRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  K$ = t.object({ sessionId: d, expectedPersistence: gg.optional() }).strict(),
  H$ = t.object({ closed: t.boolean().optional() }).strict(),
  J$ = t
    .object({
      workspace: M,
      runtimeModel: Te.optional(),
      preferWorkspaceDefaults: t.boolean().optional(),
    })
    .strict(),
  Y$ = t
    .object({
      workspace: M,
      modelRef: F,
      prompt: d,
      querySource: d,
      maxOutputTokens: t.number().int().positive().optional(),
      temperature: t.number().min(0).max(2).optional(),
    })
    .strict(),
  X$ = t.object({ text: t.string(), modelRef: F }).strict(),
  B_ = t
    .object({ revision: d, generatedAt: te, providers: t.array(eu) })
    .strict(),
  L_ = t.enum(["applied", "unchanged", "failed"]),
  Q$ = t
    .object({
      workspace: M,
      registry: B_,
      includeWorkspaceState: t.boolean().optional(),
    })
    .strict(),
  eD = t
    .object({
      workspace: M,
      appliedProviderRevision: d,
      status: L_,
      providerCount: t.number().int().nonnegative(),
      workspaceState: z_.optional(),
    })
    .strict(),
  W_ = t.object({ askUserQuestionAutoResolutionEnabled: t.boolean() }).strict(),
  tD = t.object({ workspace: M, preferences: W_ }).strict(),
  nD = t
    .object({
      workspace: M,
      askUserQuestionAutoResolutionEnabled: t.boolean(),
      snoozedInteractionCount: t.number().int().nonnegative(),
    })
    .strict(),
  oD = t
    .object({
      workspace: M,
      provider: eu,
      expectedWorkspaceRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  rD = t
    .object({
      workspace: M,
      providerId: d,
      expectedWorkspaceRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  iD = t
    .object({
      workspace: M,
      model: F,
      runtimeModel: Te.optional(),
      expectedWorkspaceRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  aD = t
    .object({
      workspace: M,
      thoughtLevel: d,
      expectedWorkspaceRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  sD = t
    .object({
      workspace: M,
      mode: Pe,
      expectedWorkspaceRevision: t.number().int().nonnegative().optional(),
    })
    .strict(),
  cD = t
    .object({
      requestId: d,
      sessionId: d,
      turnId: d.optional(),
      toolCallId: d,
      toolName: d,
      reason: t.string(),
      riskLevel: t.enum(["low", "medium", "high", "critical"]),
      input: t.unknown(),
      origin: et.optional(),
      options: t.array(Xd).min(1),
    })
    .strict(),
  F_ = t
    .object({
      requestId: d,
      sessionId: d,
      turnId: d.optional(),
      workspaceKey: d,
      workspacePath: d,
      workspaceIdentity: d.optional(),
      remoteSessionId: d.optional(),
      clientMode: Xe,
      sessionContext: _r,
    })
    .strict(),
  q_ = Em,
  V_ = t
    .object({
      requestId: d,
      sessionId: d,
      turnId: d.optional(),
      browserId: d.optional(),
      browserGeneration: t.number().int().nonnegative().optional(),
      workspaceKey: d.optional(),
      workspacePath: d.optional(),
      workspaceIdentity: d.optional(),
      remoteSessionId: d.optional(),
      clientMode: Xe.optional(),
      sessionContext: _r.optional(),
      command: Mt,
    })
    .strict(),
  G_ = $t,
  K_ = t
    .object({
      value: d,
      label: d,
      description: t.string().optional(),
      preview: t.string().optional(),
    })
    .strict(),
  H_ = t
    .object({
      question: d,
      header: d,
      options: t.array(K_).min(1),
      multiSelect: t.boolean().optional(),
    })
    .strict(),
  lD = t
    .object({
      requestId: d,
      sessionId: d,
      turnId: d.optional(),
      toolCallId: d.optional(),
      toolName: d.optional(),
      prompt: t.string().optional(),
      questions: t.array(H_).min(1).optional(),
      input: t.unknown().optional(),
      origin: et.optional(),
      schema: t.unknown().optional(),
    })
    .strict(),
  dD = t
    .object({
      action: t.enum(["accept", "decline", "cancel"]),
      content: L.optional(),
      reason: t.string().optional(),
    })
    .strict(),
  J_ = t.enum(["model-request", "captcha-retry"]),
  uD = t
    .object({
      requestId: d,
      sessionId: d,
      turnId: d.optional(),
      workspace: M,
      modelRef: F,
      providerId: d,
      reason: J_,
    })
    .strict(),
  pD = t
    .object({
      headersApplied: t.boolean(),
      errorMessage: d.optional(),
      providerRevision: d.optional(),
    })
    .strict(),
  Eg = t.union([t.string(), t.number(), t.boolean()]),
  Og = t
    .object({
      event: d,
      matcher: t.string().optional(),
      type: t.enum(["command", "process"]),
      command: d,
      args: t.array(t.string()).optional(),
      async: t.boolean().optional(),
      shell: t.union([t.literal(!0), t.string()]).optional(),
      timeout: t.number().positive().optional(),
      timeoutMs: t.number().int().positive().optional(),
      statusMessage: t.string().optional(),
      sourcePath: t.string(),
      runnable: t.boolean(),
    })
    .strict(),
  Y_ = t
    .object({
      default: Eg.optional(),
      description: t.string().optional(),
      required: t.boolean().optional(),
      sensitive: t.boolean().optional(),
      title: t.string().optional(),
      type: t
        .enum(["string", "number", "boolean", "directory", "file"])
        .optional(),
    })
    .strict(),
  X_ = t.enum(["agent", "command", "skill", "hook", "mcp"]),
  Q_ = t.object({ name: d, description: t.string().optional() }).strict(),
  Ag = t.object({ kind: X_, items: t.array(Q_) }).strict(),
  zg = t
    .object({
      id: d,
      name: d,
      description: t.string().optional(),
      version: t.string().optional(),
      enabled: t.boolean(),
      source: d,
      marketplace: d,
      author: t.string().optional(),
      authorUrl: t.string().optional(),
      homepage: t.string().optional(),
      skillCount: t.number().int().nonnegative().optional(),
      skillRootCount: t.number().int().nonnegative(),
      commandRootCount: t.number().int().nonnegative(),
      components: t.array(Ag).optional(),
      declaredMcpServerNames: t.array(t.string()).optional(),
      hostMcpServerNames: t.array(t.string()).optional(),
      mcpServerNames: t.array(t.string()),
      hookDetails: t.array(Og).optional(),
      rootPath: t.string(),
      userConfig: t.record(t.string(), Y_).optional(),
      configuredOptions: t.record(t.string(), Eg).optional(),
    })
    .strict(),
  we = t
    .object({
      code: t.string(),
      message: t.string(),
      severity: t.enum(["warning", "error"]).optional(),
      pluginId: t.string().optional(),
    })
    .strict(),
  mD = t.object({ workspace: M }).strict(),
  gD = t.object({ plugins: t.array(zg), diagnostics: t.array(we) }).strict(),
  ex = t
    .object({
      pluginId: d,
      name: d,
      marketplace: d,
      icon: t.string().optional(),
      enabled: t.boolean(),
      conflictingPluginIds: t.array(d),
      skillQualifiedNames: t.array(d),
      mcpServerNames: t.array(d),
      subagentNames: t.array(d).default([]),
    })
    .strict(),
  fD = t.object({ workspace: M, sessionId: d.optional() }).strict(),
  hD = t
    .object({
      authority: t.enum(["session", "workspace"]),
      plugins: t.array(ex),
    })
    .strict(),
  yD = t.object({ workspace: M, pluginId: d, enabled: t.boolean() }).strict(),
  bD = t.object({ plugin: zg, enabled: t.boolean() }).strict(),
  Mg = t.enum(["user", "workspace"]),
  $g = t
    .object({
      displayName: t.string().optional(),
      displayNameI18n: t.record(t.string(), t.string()).optional(),
      descriptionI18n: t.record(t.string(), t.string()).optional(),
      icon: t.string().optional(),
      category: t.string().optional(),
      author: t.string().optional(),
      authorUrl: t.string().optional(),
      homepage: t.string().optional(),
      privacyPolicy: t.string().optional(),
      termsOfService: t.string().optional(),
      heroImage: t.string().optional(),
      examplePrompts: t.array(t.string()).optional(),
      examplePromptsI18n: t.record(t.string(), t.array(t.string())).optional(),
    })
    .strict(),
  Jd = t
    .object({
      id: d,
      name: d,
      source: L,
      description: t.string().optional(),
      lastUpdated: t.string().optional(),
      pluginCount: t.number().int().nonnegative(),
      isOfficial: t.boolean().optional(),
      featured: t.array(t.string()).optional(),
    })
    .strict(),
  ug = t
    .object({
      id: d,
      name: d,
      marketplace: d,
      description: t.string().optional(),
      version: t.string().optional(),
      installed: t.boolean(),
      componentTypes: t.array(t.string()).optional(),
      listing: $g.optional(),
    })
    .strict(),
  tu = t
    .object({
      id: d,
      name: d,
      marketplace: d,
      description: t.string().optional(),
      version: t.string().optional(),
      enabled: t.boolean(),
      scope: Mg,
      installPath: t.string().optional(),
      installedAt: t.string().optional(),
      componentTypes: t.array(t.string()).optional(),
      hookDetails: t.array(Og).optional(),
      updateStatus: t
        .enum(["none", "update-available", "version-changed"])
        .optional(),
      latestVersion: t.string().optional(),
      listing: $g.optional(),
    })
    .strict(),
  vD = t.object({ workspace: M }).strict(),
  SD = t
    .object({
      marketplaces: t.array(Jd),
      availablePlugins: t.array(ug),
      installedPlugins: t.array(tu),
      restorableBuiltins: t.array(ug),
      diagnostics: t.array(we),
      capability: t
        .object({ supported: t.boolean(), reason: t.string().optional() })
        .strict(),
    })
    .strict(),
  _D = t
    .object({
      workspace: M,
      source: d,
      dryRun: t.boolean().optional(),
      operationId: d.optional(),
    })
    .strict(),
  xD = t.object({ workspace: M, marketplace: d }).strict(),
  kD = t.object({ workspace: M, marketplace: d.optional() }).strict(),
  ID = t
    .object({
      marketplace: Jd.optional(),
      marketplaces: t.array(Jd).optional(),
      diagnostics: t.array(we).optional(),
    })
    .strict(),
  CD = t
    .object({
      workspace: M,
      pluginName: d,
      marketplace: d,
      scope: Mg.optional(),
      dryRun: t.boolean().optional(),
      operationId: d.optional(),
    })
    .strict(),
  RD = t.object({ operationId: d }).strict(),
  PD = t.object({ operationId: d, cancelled: t.boolean() }).strict(),
  TD = t
    .object({
      workspace: M,
      pluginId: d.optional(),
      pluginName: d.optional(),
      marketplace: d.optional(),
      removeCache: t.boolean().optional(),
    })
    .strict(),
  wD = t
    .object({
      installedPlugins: t.array(tu),
      dependencyClosure: t.array(t.string()),
      diagnostics: t.array(we),
    })
    .strict(),
  ED = t
    .object({ removedPlugin: tu.optional(), diagnostics: t.array(we) })
    .strict(),
  OD = t
    .object({ workspace: M, pluginId: d.optional(), marketplace: d.optional() })
    .strict(),
  AD = t.object({ workspace: M, pluginId: d }).strict(),
  zD = t.object({ pluginId: d, diagnostics: t.array(we) }).strict(),
  MD = t
    .object({
      workspace: M,
      pluginId: d,
      options: L,
      dryRun: t.boolean().optional(),
    })
    .strict(),
  $D = t.object({ pluginId: d, diagnostics: t.array(we) }).strict(),
  DD = t
    .object({
      workspace: M,
      pluginName: d.optional(),
      marketplace: d.optional(),
      source: d.optional(),
    })
    .strict(),
  UD = t
    .object({
      ok: t.boolean(),
      diagnostics: t.array(we),
      compatibility: t
        .object({
          runnable: t.array(t.string()),
          diagnosticOnly: t.array(t.string()),
          unsupported: t.array(t.string()),
        })
        .strict(),
    })
    .strict(),
  ND = t.object({ workspace: M, pluginName: d, marketplace: d }).strict(),
  ZD = t
    .object({
      components: t.array(Ag),
      diagnostics: t.array(we).optional(),
      metadata: t
        .object({
          author: t.string().optional(),
          authorUrl: t.string().optional(),
          homepage: t.string().optional(),
          version: t.string().optional(),
        })
        .strict()
        .optional(),
    })
    .strict(),
  tx = t
    .object({
      unit: t.enum([
        "minute",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
      ]),
      interval: t.number().int().positive(),
      hour: t.number().int().min(0).max(23),
      minute: t.number().int().min(0).max(59),
      anchorAt: t.number().int(),
      weekdays: t.array(t.number().int().min(0).max(6)).optional(),
      monthDays: t.array(t.number().int().min(1).max(31)).optional(),
      months: t.array(t.number().int().min(1).max(12)).optional(),
      monthlyMode: t.enum(["date", "weekday"]).optional(),
    })
    .strict(),
  Dg = t.enum(["minute", "hourly", "daily", "weekly", "monthly", "yearly"]),
  nu = t
    .object({
      automationId: d,
      title: t.string(),
      cronExpr: d,
      prompt: d,
      model: t.string().optional(),
      provider: re.optional(),
      mode: Ut.optional(),
      thoughtLevel: d.optional(),
      targetTaskId: d.optional(),
      enabled: t.boolean(),
      lifecycleStatus: t.enum(["active", "completed", "failed", "paused"]),
      nextRunAt: te.optional(),
      lastRunAt: te.optional(),
      runCount: t.number().int().nonnegative(),
      recurring: t.boolean(),
      maxRuns: t.number().int().positive().optional(),
      scheduleRule: tx.optional(),
    })
    .strict(),
  jD = t
    .object({
      title: t.string().optional(),
      cronExpr: d,
      relativeDelayMinutes: t.number().int().positive().max(525600).optional(),
      prompt: d,
      model: t.string().optional(),
      provider: re.optional(),
      mode: Ut.optional(),
      thoughtLevel: d.optional(),
      targetTaskId: d.optional(),
      botDeliveryTarget: Fd.optional(),
      recurring: t.boolean().optional(),
      maxRuns: t.number().int().positive().optional(),
      intervalUnit: Dg.optional(),
      interval: t.number().int().min(1).max(200).optional(),
    })
    .strict()
    .refine((e) => (e.intervalUnit === void 0) == (e.interval === void 0), {
      message: "intervalUnit and interval must be set together",
      path: ["interval"],
    })
    .refine(
      (e) => e.intervalUnit === void 0 || e.relativeDelayMinutes === void 0,
      {
        message: "intervalUnit cannot combine with a relative delayMinutes",
        path: ["intervalUnit"],
      },
    )
    .refine((e) => e.intervalUnit === void 0 || e.recurring !== !1, {
      message:
        "intervalUnit is a recurring carrier and cannot combine with recurring=false",
      path: ["recurring"],
    })
    .refine((e) => e.intervalUnit === void 0 || e.maxRuns === void 0, {
      message:
        "intervalUnit is a recurring carrier and cannot combine with maxRuns",
      path: ["maxRuns"],
    }),
  BD = t.object({ automation: nu }).strict(),
  LD = t
    .object({
      automationId: d,
      title: d.optional(),
      cronExpr: d.optional(),
      prompt: d.optional(),
      recurring: t.boolean().optional(),
      maxRuns: t.number().int().positive().nullable().optional(),
      intervalUnit: Dg.optional(),
      interval: t.number().int().min(1).max(200).optional(),
    })
    .strict()
    .refine(
      (e) =>
        e.title !== void 0 ||
        e.cronExpr !== void 0 ||
        e.prompt !== void 0 ||
        e.recurring !== void 0 ||
        e.maxRuns !== void 0 ||
        e.intervalUnit !== void 0,
      { message: "automation update requires at least one field" },
    )
    .refine((e) => e.maxRuns !== null || e.recurring === !0, {
      message: "clearing maxRuns requires recurring=true",
      path: ["maxRuns"],
    })
    .refine((e) => e.recurring !== !0 || typeof e.maxRuns != "number", {
      message: "recurring=true cannot be combined with a numeric maxRuns",
      path: ["maxRuns"],
    })
    .refine((e) => (e.intervalUnit === void 0) == (e.interval === void 0), {
      message: "intervalUnit and interval must be set together",
      path: ["interval"],
    })
    .refine((e) => e.intervalUnit === void 0 || e.recurring !== !1, {
      message:
        "intervalUnit is a recurring carrier and cannot combine with recurring=false",
      path: ["recurring"],
    })
    .refine(
      (e) =>
        e.intervalUnit === void 0 ||
        e.maxRuns === void 0 ||
        (e.maxRuns === null && e.recurring === !0),
      {
        message:
          "intervalUnit is a recurring carrier and only allows maxRuns=null with recurring=true",
        path: ["maxRuns"],
      },
    ),
  WD = t.object({ automation: nu }).strict(),
  FD = t.object({}).strict(),
  qD = t.object({ automations: t.array(nu) }).strict(),
  VD = t.object({ targetTaskId: d }).strict(),
  GD = t.object({ bound: t.boolean() }).strict(),
  KD = t.object({ automationId: d }).strict(),
  HD = t.object({ deleted: t.boolean() }).strict(),
  Hd = {
    sessionCreate: "session/create",
    sessionResume: "session/resume",
    sessionList: "session/list",
    sessionSubagents: "session/subagents",
    sessionRequestRuntimePreferences: "session/requestRuntimePreferences",
    sessionRead: "session/read",
    sessionMessages: "session/messages",
    sessionEvents: "session/events",
    sessionSubscribe: "session/subscribe",
    sessionSend: "session/send",
    sessionStop: "session/stop",
    sessionCancelBackgroundTask: "session/cancelBackgroundTask",
    sessionFork: "session/fork",
    sessionCompact: "session/compact",
    sessionGoal: "session/goal",
    sessionClose: "session/close",
    sessionSetModel: "session/setModel",
    sessionSetThoughtLevel: "session/setThoughtLevel",
    sessionUpdateRuntimeModelConfig: "session/updateRuntimeModelConfig",
    sessionSetMode: "session/setMode",
    workspaceReadState: "workspace/readState",
    workspaceUpdateProviderRegistry: "workspace/updateProviderRegistry",
    workspaceUpdateInteractionPreferences:
      "workspace/updateInteractionPreferences",
    workspaceUpsertModelProvider: "workspace/upsertModelProvider",
    workspaceRemoveModelProvider: "workspace/removeModelProvider",
    workspaceSetDefaultModel: "workspace/setDefaultModel",
    workspaceSetDefaultThoughtLevel: "workspace/setDefaultThoughtLevel",
    workspaceSetDefaultMode: "workspace/setDefaultMode",
    workspaceGenerateText: "workspace/generateText",
    mcpList: "mcp/list",
    pluginsList: "plugins/list",
    pluginsReferenceCatalog: "plugins/referenceCatalog",
    pluginsSetEnabled: "plugins/setEnabled",
    pluginsOverview: "plugins/overview",
    pluginsMarketplaceAdd: "plugins/marketplace/add",
    pluginsMarketplaceRemove: "plugins/marketplace/remove",
    pluginsMarketplaceUpdate: "plugins/marketplace/update",
    pluginsInstall: "plugins/install",
    pluginsCancelOperation: "plugins/cancelOperation",
    pluginsUninstall: "plugins/uninstall",
    pluginsUpdate: "plugins/update",
    pluginsRestoreBuiltin: "plugins/restoreBuiltin",
    pluginsConfigure: "plugins/configure",
    pluginsValidate: "plugins/validate",
    pluginsDescribe: "plugins/describe",
    automationCreate: "automation/create",
    automationUpdate: "automation/update",
    automationCheckTaskBinding: "automation/checkTaskBinding",
    automationList: "automation/list",
    automationDelete: "automation/delete",
    usageStats: "usage/stats",
    sessionUsage: "session/usage",
    interactionRequestPermission: "interaction/requestPermission",
    interactionRequestUserInput: "interaction/requestUserInput",
    interactionRequestProviderRuntimeHeaders:
      "interaction/requestProviderRuntimeHeaders",
    interactionBrowserList: "interaction/browserList",
    interactionBrowserExecute: "interaction/browserExecute",
  },
  JD = t.object({}).strict(),
  YD = {
    [Hd.mcpList]: { params: HS, result: JS },
    [Hd.interactionBrowserList]: { params: F_, result: q_ },
    [Hd.interactionBrowserExecute]: { params: V_, result: G_ },
  };
var rU = 3,
  iU = t
    .object({
      rowId: t.number().int().nonnegative(),
      entityId: t.string().trim().min(1),
    })
    .strict(),
  aU = t.number(),
  sU = t.enum(["text", "inputText", "output.text", "summaryText"]);
var wn = {
  maxFrameBytes: 1024 * 1024,
  logicalFrameAssemblyMaxBytes: 16 * 1024 * 1024,
  logicalFrameAssemblyMaxFragments: 1024,
  logicalFrameAssemblyMaxConcurrent: 32,
  logicalFrameAssemblyMaxStagedBytes: 32 * 1024 * 1024,
  logicalFrameAssemblyTimeoutMs: 3e4,
  transportEnvelopeIdMaxChars: 256,
  subscriberBufferMaxOps: 500,
  subscriberBufferMaxBytes: 1024 * 1024,
  eventRetentionPerSession: 2e3,
  snapshotTailWindowRows: 60,
  rowsRangeMaxLimit: 200,
  toolOutputFinalHeadBytes: 32 * 1024,
  toolOutputFinalTailBytes: 32 * 1024,
  goalVerificationsRetained: 20,
  pendingCommandsDisplayMax: 32,
  commandPendingTtlMs: 1440 * 60 * 1e3,
  idempotencyTablePerSession: 512,
  conversationQueryTimeoutMs: 1e4,
  attachmentMaxBytes: 20 * 1024 * 1024,
  attachmentChunkMaxBytes: 512 * 1024,
  attachmentReadCacheMaxBytes: 32 * 1024 * 1024,
  attachmentReadCacheTtlMs: 3e4,
  attachmentUploadMaxChunks: 64,
  attachmentUploadMaxConcurrent: 16,
  attachmentUploadMaxStagedBytes: 64 * 1024 * 1024,
  attachmentUploadTtlMs: 5 * 6e4,
  attachmentUnreferencedTtlMs: 1440 * 60 * 1e3,
};
var nx = t
  .string()
  .min(4)
  .regex(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u);
function Tr(e) {
  let o = 4294967295;
  for (let r of e) {
    o ^= r;
    for (let a = 0; a < 8; a += 1) o = (o >>> 1) ^ (o & 1 ? 3988292384 : 0);
  }
  return ((o ^ 4294967295) >>> 0).toString(16).padStart(8, "0");
}
c(Tr, "crc32WireBytes");
var Le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function ou(e) {
  let o = "",
    r = [];
  for (let a = 0; a < e.byteLength; a += 3) {
    let n = e[a] ?? 0,
      i = a + 1 < e.byteLength,
      s = a + 2 < e.byteLength,
      l = i ? (e[a + 1] ?? 0) : 0,
      p = s ? (e[a + 2] ?? 0) : 0;
    (r.push(
      Le[n >>> 2],
      Le[((n & 3) << 4) | (l >>> 4)],
      i ? Le[((l & 15) << 2) | (p >>> 6)] : "=",
      s ? Le[p & 63] : "=",
    ),
      r.length >= 16384 && ((o += r.join("")), (r = [])));
  }
  return o + r.join("");
}
c(ou, "encodeWireBytesBase64");
function ru(e) {
  if (!nx.safeParse(e).success) return null;
  let o = e.endsWith("==") ? 2 : e.endsWith("=") ? 1 : 0,
    r = new Uint8Array((e.length / 4) * 3 - o),
    a = 0;
  for (let n = 0; n < e.length; n += 4) {
    let i = Le.indexOf(e[n]),
      s = Le.indexOf(e[n + 1]),
      l = e[n + 2] === "=" ? 0 : Le.indexOf(e[n + 2]),
      p = e[n + 3] === "=" ? 0 : Le.indexOf(e[n + 3]);
    if (i < 0 || s < 0 || l < 0 || p < 0) return null;
    let u = (i << 18) | (s << 12) | (l << 6) | p;
    (a < r.length && (r[a++] = u >>> 16),
      a < r.length && (r[a++] = (u >>> 8) & 255),
      a < r.length && (r[a++] = u & 255));
  }
  return r;
}
c(ru, "decodeWireBase64");
var ae = {
    maxPhysicalFrameBytes: wn.maxFrameBytes,
    maxMessageBytes: 16 * 1024 * 1024,
    maxFragments: 64,
    assemblyTimeoutMs: 3e4,
    transportIdMaxChars: wn.transportEnvelopeIdMaxChars,
  },
  iu = t.number().int().positive().max(Number.MAX_SAFE_INTEGER),
  En = t.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER),
  Zt = t
    .string()
    .min(1)
    .max(ae.transportIdMaxChars)
    .regex(/^[A-Za-z0-9._~-]+$/u),
  ox = t
    .object({
      bridgeSessionId: Zt,
      bridgeGeneration: En.optional(),
      recoveryId: Zt.optional(),
    })
    .strict(),
  rx = t
    .object({
      algorithm: t.literal("crc32"),
      value: t.string().regex(/^[0-9a-f]{8}$/u),
    })
    .strict();
function Zg(e) {
  if (e.length < 4 || e.length > ae.maxPhysicalFrameBytes) return !1;
  let o = ru(e);
  return o !== null && o.byteLength > 0 && ou(o) === e;
}
c(Zg, "isCanonicalBase64");
var On = t
    .object({
      zcode_type: t.literal("rpc-frame"),
      bridgeSessionId: Zt,
      bridgeGeneration: En.optional(),
      recoveryId: Zt.optional(),
      seq: iu,
      messageSeq: iu,
      fragmentIndex: t
        .number()
        .int()
        .nonnegative()
        .max(ae.maxFragments - 1),
      fragmentCount: t.number().int().positive().max(ae.maxFragments),
      messageBytes: t.number().int().positive().max(ae.maxMessageBytes),
      checksum: rx,
      dataBase64: t.string().min(4).max(ae.maxPhysicalFrameBytes).refine(Zg),
    })
    .strict()
    .superRefine((e, o) => {
      (e.fragmentIndex >= e.fragmentCount &&
        o.addIssue({
          code: "custom",
          path: ["fragmentIndex"],
          message: "fragmentIndex must be smaller than fragmentCount",
        }),
        e.fragmentCount > e.messageBytes &&
          o.addIssue({
            code: "custom",
            path: ["fragmentCount"],
            message: "non-empty fragments cannot exceed message bytes",
          }));
    }),
  au = t
    .object({
      zcode_type: t.literal("rpc-frame-ack"),
      bridgeSessionId: Zt,
      bridgeGeneration: En.optional(),
      recoveryId: Zt.optional(),
      ackMessageSeq: iu,
    })
    .strict(),
  jg = t.union([On, au]),
  vU = t
    .object({
      type: t.literal("data"),
      payload: jg,
      client_ts: En.optional(),
      server_ts: En.optional(),
    })
    .strict();
function ix(e) {
  return new TextEncoder().encode(e).byteLength;
}
c(ix, "utf8Bytes");
function ax(e, o = {}) {
  let r =
      o.clientTimestamp === void 0
        ? Number.MAX_SAFE_INTEGER
        : o.clientTimestamp,
    a =
      o.serverTimestamp === void 0
        ? Number.MAX_SAFE_INTEGER
        : o.serverTimestamp;
  return {
    type: "data",
    payload: e,
    ...(r === null ? {} : { client_ts: r }),
    ...(a === null ? {} : { server_ts: a }),
  };
}
c(ax, "relayEnvelopeFor");
function su(e, o) {
  return ix(JSON.stringify(ax(e, o)));
}
c(su, "measureWebRemoteControlRpcRelayEnvelopeBytes");
function nt(e, o, r) {
  let a = e ?? o;
  if (!Number.isSafeInteger(a) || a <= 0) throw new ge(r);
  return Math.min(a, o);
}
c(nt, "boundedPositive");
function SU(e) {
  let o = jg.safeParse(e);
  return o.success ? o.data : null;
}
c(SU, "parseWebRemoteControlRpcTransportPayload");
var ge = class extends Error {
  constructor(r) {
    super(r);
    this.reasonCode = r;
    this.name = "WebRemoteControlRpcTransportEncodingError";
  }
  reasonCode;
  static {
    c(this, "WebRemoteControlRpcTransportEncodingError");
  }
};
function Bg(e) {
  let o = ox.safeParse({
    bridgeSessionId: e.bridgeSessionId,
    ...(e.bridgeGeneration === void 0
      ? {}
      : { bridgeGeneration: e.bridgeGeneration }),
    ...(e.recoveryId === void 0 ? {} : { recoveryId: e.recoveryId }),
  });
  if (!o.success) throw new ge("remote.rpcFrame.invalidIdentity");
  return o.data;
}
c(Bg, "identityFrom");
function wr(e, o) {
  if (!Number.isSafeInteger(e) || e <= 0) throw new ge(o);
}
c(wr, "assertPositiveSafe");
function sx(e) {
  return 4 * Math.ceil(e / 3);
}
c(sx, "base64Length");
function Lg(e) {
  return {
    zcode_type: "rpc-frame",
    ...e.identity,
    seq: e.seq,
    messageSeq: e.messageSeq,
    fragmentIndex: e.fragmentIndex,
    fragmentCount: e.fragmentCount,
    messageBytes: e.messageBytes,
    checksum: e.checksum,
    dataBase64: e.dataBase64,
  };
}
c(Lg, "frameShell");
function cx(e) {
  let o = Lg({
      identity: e.identity,
      seq: e.endSeq,
      messageSeq: e.messageSeq,
      fragmentIndex: e.fragmentCount - 1,
      fragmentCount: e.fragmentCount,
      messageBytes: e.messageBytes,
      checksum: e.checksum,
      dataBase64: "",
    }),
    r = su(o),
    a = 0,
    n = e.messageBytes;
  for (; a < n; ) {
    let i = Math.ceil((a + n) / 2);
    r + sx(i) <= e.maxPhysicalFrameBytes ? (a = i) : (n = i - 1);
  }
  return a;
}
c(cx, "findDecodedBudget");
function _U(e, o) {
  let r = Bg(o);
  (wr(o.firstPhysicalSeq, "remote.rpcFrame.invalidPhysicalSeq"),
    wr(o.messageSeq, "remote.rpcFrame.invalidMessageSeq"));
  let a = nt(
      o.maxPhysicalFrameBytes,
      ae.maxPhysicalFrameBytes,
      "remote.rpcFrame.invalidPhysicalLimit",
    ),
    n = nt(
      o.maxMessageBytes,
      ae.maxMessageBytes,
      "remote.rpcFrame.invalidMessageLimit",
    ),
    i = nt(
      o.maxFragments,
      ae.maxFragments,
      "remote.rpcFrame.invalidFragmentLimit",
    );
  if (e.byteLength === 0) throw new ge("remote.rpcFrame.emptyMessage");
  if (e.byteLength > n) throw new ge("remote.rpcFrame.messageTooLarge");
  let s = Object.freeze({ algorithm: "crc32", value: Tr(e) }),
    l = 1,
    p = 0;
  for (;;) {
    let h = o.firstPhysicalSeq + l - 1;
    if (!Number.isSafeInteger(h) || h > Number.MAX_SAFE_INTEGER)
      throw new ge("remote.rpcFrame.sequenceOverflow");
    if (
      ((p = cx({
        identity: r,
        endSeq: h,
        messageSeq: o.messageSeq,
        fragmentCount: l,
        messageBytes: e.byteLength,
        checksum: s,
        maxPhysicalFrameBytes: a,
      })),
      p < 1)
    )
      throw new ge("remote.rpcFrame.envelopeTooLarge");
    let b = Math.ceil(e.byteLength / p);
    if (b > i) throw new ge("remote.rpcFrame.fragmentLimitExceeded");
    if (b <= l) break;
    l = b;
  }
  let u = [];
  for (let h = 0; h < l; h += 1) {
    let b = h * p,
      S = Math.min(e.byteLength, b + p),
      _ = Lg({
        identity: r,
        seq: o.firstPhysicalSeq + h,
        messageSeq: o.messageSeq,
        fragmentIndex: h,
        fragmentCount: l,
        messageBytes: e.byteLength,
        checksum: s,
        dataBase64: ou(e.subarray(b, S)),
      });
    if (su(_) > a || !On.safeParse(_).success)
      throw new ge("remote.rpcFrame.internalEnvelopeError");
    u.push(Object.freeze(_));
  }
  return Object.freeze(u);
}
c(_U, "encodeWebRemoteControlRpcTransportMessage");
function lx(e, o) {
  return (
    o.bridgeSessionId === e.bridgeSessionId &&
    o.bridgeGeneration === e.bridgeGeneration &&
    o.recoveryId === e.recoveryId
  );
}
c(lx, "sameIdentity");
function dx(e, o) {
  if (typeof o != "object" || o === null) return !1;
  let r = o;
  return ["bridgeSessionId", "bridgeGeneration", "recoveryId"].some(
    (n) => n in r,
  )
    ? r.bridgeSessionId !== e.bridgeSessionId ||
        r.bridgeGeneration !== e.bridgeGeneration ||
        r.recoveryId !== e.recoveryId
    : !1;
}
c(dx, "hasRawIdentityMismatch");
function ux(e, o) {
  return {
    messageSeq: e.messageSeq,
    value: JSON.stringify([
      e.bridgeSessionId,
      e.bridgeGeneration ?? null,
      e.recoveryId ?? null,
      e.seq,
      e.messageSeq,
      e.fragmentIndex,
      e.fragmentCount,
      e.messageBytes,
      e.checksum.algorithm,
      e.checksum.value,
      o.byteLength,
      Tr(o),
    ]),
  };
}
c(ux, "frameFingerprint");
function Ug(e, o) {
  return e.value === o.value;
}
c(Ug, "sameFingerprint");
var Ng = class {
  static {
    c(this, "WebRemoteControlRpcTransportAssembler");
  }
  identity;
  maxPhysicalFrameBytes;
  maxMessageBytes;
  maxFragments;
  timeoutMs;
  now;
  expectedPhysicalSeq;
  expectedMessageSeq;
  lastCompletedMessageSeq;
  physicalSequenceExhausted = !1;
  messageSequenceExhausted = !1;
  settledFrameFingerprintsBySeq = new Map();
  active = null;
  terminalReason = null;
  constructor(o) {
    ((this.identity = Bg(o.identity)),
      (this.expectedPhysicalSeq = o.initialPhysicalSeq ?? 1),
      (this.expectedMessageSeq = o.initialMessageSeq ?? 1),
      wr(this.expectedPhysicalSeq, "remote.rpcFrame.invalidPhysicalSeq"),
      wr(this.expectedMessageSeq, "remote.rpcFrame.invalidMessageSeq"),
      (this.lastCompletedMessageSeq = this.expectedMessageSeq - 1),
      (this.maxPhysicalFrameBytes = nt(
        o.maxPhysicalFrameBytes,
        ae.maxPhysicalFrameBytes,
        "remote.rpcFrame.invalidPhysicalLimit",
      )),
      (this.maxMessageBytes = nt(
        o.maxMessageBytes,
        ae.maxMessageBytes,
        "remote.rpcFrame.invalidMessageLimit",
      )),
      (this.maxFragments = nt(
        o.maxFragments,
        ae.maxFragments,
        "remote.rpcFrame.invalidFragmentLimit",
      )),
      (this.timeoutMs = nt(
        o.timeoutMs,
        ae.assemblyTimeoutMs,
        "remote.rpcFrame.invalidTimeout",
      )),
      (this.now = o.now ?? Date.now));
  }
  get nextExpiryAt() {
    return this.active ? this.active.firstSeenAt + this.timeoutMs : null;
  }
  fault(o, r, a) {
    return (
      r && ((this.terminalReason = o), (this.active = null)),
      {
        kind: "fault",
        fault: {
          reasonCode: o,
          terminal: r,
          ...(typeof a?.seq == "number" ? { seq: a.seq } : {}),
          ...(typeof a?.messageSeq == "number"
            ? { messageSeq: a.messageSeq }
            : {}),
          expectedSeq: this.expectedPhysicalSeq,
          expectedMessageSeq: this.expectedMessageSeq,
        },
      }
    );
  }
  expire(o = this.now()) {
    return !this.active || o - this.active.firstSeenAt < this.timeoutMs
      ? null
      : this.fault("remote.rpcFrame.assemblyTimeout", !0, {
          messageSeq: this.active.messageSeq,
        });
  }
  accept(o, r = this.now()) {
    if (dx(this.identity, o))
      return this.fault("remote.rpcFrame.identityMismatch", !1);
    if (this.terminalReason) return this.fault(this.terminalReason, !0);
    let a = this.expire(r);
    if (a) return a;
    let n =
      typeof o == "object" && o !== null && "dataBase64" in o
        ? o.dataBase64
        : void 0;
    if (
      typeof n == "string" &&
      (n.length > this.maxPhysicalFrameBytes || !Zg(n))
    )
      return this.fault("remote.rpcFrame.invalidBase64", !0);
    let i = On.safeParse(o);
    if (!i.success) return this.fault("remote.rpcFrame.invalidMetadata", !0);
    let s = i.data;
    if (!lx(this.identity, s))
      return this.fault("remote.rpcFrame.identityMismatch", !1, s);
    if (s.messageBytes > this.maxMessageBytes)
      return this.fault("remote.rpcFrame.messageTooLarge", !0, s);
    if (s.fragmentCount > this.maxFragments)
      return this.fault("remote.rpcFrame.fragmentLimitExceeded", !0, s);
    if (su(s) > this.maxPhysicalFrameBytes)
      return this.fault("remote.rpcFrame.envelopeTooLarge", !0, s);
    let l = ru(s.dataBase64);
    if (!l || l.byteLength === 0)
      return this.fault("remote.rpcFrame.invalidBase64", !0, s);
    let p = ux(s, l),
      u = this.active?.frameFingerprintsBySeq.get(s.seq);
    if (u)
      return Ug(u, p)
        ? {
            kind: "duplicate",
            ackMessageSeq:
              this.lastCompletedMessageSeq > 0
                ? this.lastCompletedMessageSeq
                : null,
          }
        : this.fault("remote.rpcFrame.conflictingDuplicate", !0, s);
    let h = this.settledFrameFingerprintsBySeq.get(s.seq);
    if (h)
      return Ug(h, p)
        ? {
            kind: "duplicate",
            ackMessageSeq:
              this.lastCompletedMessageSeq > 0
                ? this.lastCompletedMessageSeq
                : null,
          }
        : this.physicalSequenceExhausted && s.messageSeq !== h.messageSeq
          ? this.fault("remote.rpcFrame.physicalSequenceExhausted", !0, s)
          : this.fault("remote.rpcFrame.conflictingDuplicate", !0, s);
    if (s.seq < this.expectedPhysicalSeq)
      return {
        kind: "duplicate",
        ackMessageSeq:
          this.lastCompletedMessageSeq > 0
            ? this.lastCompletedMessageSeq
            : null,
      };
    if (this.physicalSequenceExhausted)
      return this.fault("remote.rpcFrame.physicalSequenceExhausted", !0, s);
    if (this.messageSequenceExhausted && !this.active)
      return this.fault("remote.rpcFrame.messageSequenceExhausted", !0, s);
    if (s.seq > this.expectedPhysicalSeq)
      return this.fault("remote.rpcFrame.physicalGap", !0, s);
    if (s.messageSeq !== this.expectedMessageSeq)
      return this.fault("remote.rpcFrame.messageGap", !0, s);
    if (
      s.seq === Number.MAX_SAFE_INTEGER &&
      s.fragmentIndex + 1 < s.fragmentCount
    )
      return this.fault("remote.rpcFrame.physicalSequenceExhausted", !0, s);
    let b = this.active?.fragments.length ?? 0;
    if (s.fragmentIndex !== b)
      return this.fault("remote.rpcFrame.fragmentGap", !0, s);
    if (
      this.active &&
      (s.fragmentCount !== this.active.fragmentCount ||
        s.messageBytes !== this.active.messageBytes)
    )
      return this.fault("remote.rpcFrame.metadataMismatch", !0, s);
    if (this.active && s.checksum.value !== this.active.checksum.value)
      return this.fault("remote.rpcFrame.checksumMismatch", !0, s);
    if (
      (this.active ||
        (this.active = {
          messageSeq: s.messageSeq,
          fragmentCount: s.fragmentCount,
          messageBytes: s.messageBytes,
          checksum: s.checksum,
          firstSeenAt: r,
          stagedBytes: 0,
          fragments: [],
          frameFingerprintsBySeq: new Map(),
        }),
      this.active.stagedBytes + l.byteLength > this.active.messageBytes)
    )
      return this.fault("remote.rpcFrame.lengthMismatch", !0, s);
    if (
      (this.active.fragments.push(l),
      this.active.frameFingerprintsBySeq.set(s.seq, p),
      (this.active.stagedBytes += l.byteLength),
      s.seq === Number.MAX_SAFE_INTEGER
        ? (this.physicalSequenceExhausted = !0)
        : (this.expectedPhysicalSeq += 1),
      this.active.fragments.length < this.active.fragmentCount)
    )
      return {
        kind: "incomplete",
        messageSeq: s.messageSeq,
        receivedFragments: this.active.fragments.length,
      };
    if (this.active.stagedBytes !== this.active.messageBytes)
      return this.fault("remote.rpcFrame.lengthMismatch", !0, s);
    let S = new Uint8Array(this.active.messageBytes),
      _ = 0;
    for (let xe of this.active.fragments) (S.set(xe, _), (_ += xe.byteLength));
    if (Tr(S) !== this.active.checksum.value)
      return this.fault("remote.rpcFrame.checksumMismatch", !0, s);
    let z = this.active,
      $ = z.messageSeq;
    return (
      (this.settledFrameFingerprintsBySeq = new Map(z.frameFingerprintsBySeq)),
      (this.active = null),
      (this.lastCompletedMessageSeq = $),
      $ === Number.MAX_SAFE_INTEGER
        ? (this.messageSequenceExhausted = !0)
        : (this.expectedMessageSeq += 1),
      { kind: "complete", messageSeq: $, bytes: S }
    );
  }
};
var P = t.string().trim().min(1),
  px = [
    "default",
    "yolo",
    "plan",
    "edit",
    "acceptEdits",
    "auto",
    "dontAsk",
    "bypassPermissions",
    "autoEdit",
    "build",
  ],
  mx = ["claude", "opencode", "gemini", "codex", "glm"],
  gx = ["claudeCode"],
  fx = t
    .object({
      fileCount: t.number().int().nonnegative(),
      added: t.number().int().nonnegative(),
      removed: t.number().int().nonnegative(),
      files: t.array(
        t
          .object({
            path: t.string(),
            added: t.number().int().nonnegative(),
            removed: t.number().int().nonnegative(),
            writeCount: t.number().int().positive(),
            lastTurnIndex: t.number().int().nonnegative(),
          })
          .strict(),
      ),
    })
    .strict(),
  hx = t.object({
    taskId: P,
    traceId: P,
    title: t.string(),
    titleOverridden: t.boolean().optional(),
    workspacePath: P,
    workspaceIdentity: P.optional(),
    createdAt: t.number().int().nonnegative(),
    updatedAt: t.number().int().nonnegative(),
    mode: t.enum(px),
    model: t.string().optional(),
    runtimeEpoch: t.number().int().nonnegative().optional(),
    provider: t.enum(mx).optional(),
    migrationSource: t.enum(gx).optional(),
    forkedFromTaskId: P.optional(),
    unreadAt: t.number().int().nonnegative().optional(),
    status: t.enum(["running", "completed", "error"]).optional(),
    lastError: t
      .object({
        code: t.string().optional(),
        message: t.string().min(1),
        traceId: P.optional(),
        taskId: P.optional(),
      })
      .optional(),
    changeSummary: fx.optional(),
  });
function yx(e) {
  return e.workspaceIdentity?.trim() || e.workspacePath;
}
c(yx, "resolveWorkspaceKey");
var bx = t.enum([
    "task_created",
    "user_message_saved",
    "assistant_message_saved",
    "task_status_changed",
    "task_meta_changed",
    "task_model_changed",
    "task_title_changed",
    "task_pinned",
    "task_unpinned",
    "task_archived",
    "task_unarchived",
    "task_deleted",
    "stream_mirror_gap",
    "stream_mirror_owner_lost",
  ]),
  cu = t.enum(["observer", "relay_owner"]),
  An = t.enum(["desktop_window", "relay_bridge"]),
  Wg = t
    .object({
      eventId: P,
      workspacePath: P,
      workspaceIdentity: P.optional(),
      workspaceKey: P,
      traceId: P,
      createdAt: t.number().int().nonnegative(),
    })
    .strict(),
  vx = t.object({ runId: P, opSeq: t.number().int().nonnegative() }).strict(),
  Fg = Wg.extend({ reason: bx, streamWatermark: vx.optional() }).strict(),
  jt = c((e, o) => {
    let r = yx(o);
    o.workspaceKey !== r &&
      e.addIssue({
        code: t.ZodIssueCode.custom,
        path: ["workspaceKey"],
        message: "workspaceKey must match workspaceIdentity fallback rule",
      });
  }, "addWorkspaceKeyIssue"),
  Er = c((e, o) => {
    o.runId !== o.traceId &&
      e.addIssue({
        code: t.ZodIssueCode.custom,
        path: ["runId"],
        message: "runId must match traceId",
      });
  }, "addRunIdTraceIdIssue"),
  qg = Fg.extend({
    type: t.literal("task_snapshot_invalidated"),
    taskId: P,
  }).strict(),
  Vg = Fg.extend({
    type: t.literal("workspace_task_list_invalidated"),
    taskId: P.optional(),
    taskMeta: hx.optional(),
  }).strict(),
  Gg = t.discriminatedUnion("kind", [
    t
      .object({
        kind: t.literal("image"),
        filename: t.string(),
        mimeType: t.string(),
        sizeBytes: t.number().int().nonnegative().optional(),
        dataBase64: t.string().optional(),
        localPath: t.string().optional(),
      })
      .strict(),
    t
      .object({
        kind: t.literal("audio"),
        filename: t.string(),
        mimeType: t.string(),
        dataBase64: t.string().optional(),
        localPath: t.string().optional(),
      })
      .strict(),
    t
      .object({
        kind: t.literal("file"),
        filename: t.string(),
        mimeType: t.string(),
        sizeBytes: t.number().int().nonnegative(),
        dataBase64: t.string().optional(),
        textContent: t.string().optional(),
        localPath: t.string().optional(),
      })
      .strict(),
  ]),
  Sx = t.object({ type: P, taskId: P, traceId: P }).passthrough(),
  Kg = t
    .object({
      kind: t.literal("user_message"),
      messageId: P,
      content: t.string(),
      attachments: t.array(Gg).optional(),
      timestamp: t.number().finite(),
    })
    .strict(),
  Hg = t.object({ kind: t.literal("stream_event"), event: Sx }).strict(),
  Jg = t.discriminatedUnion("kind", [Kg, Hg]),
  _x = t.discriminatedUnion("kind", [
    Kg.extend({ seq: t.number().int().positive() }).strict(),
    Hg.extend({ seq: t.number().int().positive() }).strict(),
  ]),
  Yg = t
    .object({
      workspacePath: P,
      workspaceIdentity: P.optional(),
      workspaceKey: P,
      taskId: P,
      runId: P,
      traceId: P,
      ownerClientId: P.optional(),
      ownerDeviceLabel: P.optional(),
    })
    .strict(),
  lu = Yg.superRefine((e, o) => {
    (jt(o, e), Er(o, e));
  }),
  Xg = Wg.extend({
    type: t.literal("task_stream_mirror_batch"),
    taskId: P,
    runId: P,
    ownerClientId: P.optional(),
    ownerDeviceLabel: P.optional(),
    batchSeq: t.number().int().positive(),
    fromSeq: t.number().int().positive(),
    toSeq: t.number().int().positive(),
    ops: t.array(_x),
    terminal: t.boolean(),
  }).strict(),
  Qg = lu,
  ef = Yg.extend({ leaseRequestId: P })
    .strict()
    .superRefine((e, o) => {
      (jt(o, e), Er(o, e));
    }),
  tf = t.discriminatedUnion("acquired", [
    t
      .object({ leaseRequestId: P, acquired: t.literal(!0), ownerHostId: P })
      .strict(),
    t
      .object({
        leaseRequestId: P,
        acquired: t.literal(!1),
        ownerHostId: P,
        reason: t.literal("owned_by_other_host"),
      })
      .strict(),
  ]),
  Bt = t
    .object({
      commandRequestId: P,
      workspacePath: P,
      workspaceIdentity: P.optional(),
      workspaceKey: P,
      taskId: P,
      runId: P,
    })
    .strict(),
  nf = Bt.extend({ type: t.literal("stop_generation") }).strict(),
  of = Bt.extend({
    type: t.literal("respond_permission"),
    permissionRequestId: P,
    optionId: P,
    response: Dt,
  }).strict(),
  rf = Bt.extend({
    type: t.literal("respond_elicitation"),
    elicitationRequestId: P,
    action: t.enum(["accept", "decline", "cancel"]),
    content: t.record(t.string(), t.unknown()).optional(),
  }).strict(),
  xx = t
    .object({
      commandId: P,
      taskId: P,
      traceId: P,
      workspacePath: P,
      workspaceIdentity: P.optional(),
      workspaceKey: P,
      status: t.enum(["accepted", "running", "failed"]),
      createdAt: t.number().int().nonnegative(),
      updatedAt: t.number().int().nonnegative(),
      clientId: P.optional(),
      clientLabel: P.optional(),
      error: t.string().optional(),
    })
    .strict(),
  af = t.discriminatedUnion("type", [
    xx
      .extend({
        type: t.literal("send_prompt"),
        content: t.string(),
        attachments: t.array(Gg).optional(),
        automationId: P.optional(),
      })
      .strict(),
  ]),
  sf = Bt.extend({
    type: t.literal("enqueue_task_command"),
    taskCommand: af,
  }).strict(),
  cf = Bt.extend({
    type: t.literal("promote_task_command"),
    commandId: P,
    clientMode: t.literal("web-remote-replayable"),
  }).strict(),
  lf = Bt.extend({
    type: t.literal("cancel_task_command"),
    commandId: P,
    clientMode: t.literal("web-remote-replayable"),
  }).strict(),
  df = t
    .discriminatedUnion("type", [nf, of, rf, sf, cf, lf])
    .superRefine((e, o) => {
      jt(o, e);
    }),
  uf = t
    .discriminatedUnion("type", [
      nf.extend({ requesterHostId: P }).strict(),
      of.extend({ requesterHostId: P }).strict(),
      rf.extend({ requesterHostId: P }).strict(),
      sf.extend({ requesterHostId: P }).strict(),
      cf.extend({ requesterHostId: P }).strict(),
      lf.extend({ requesterHostId: P }).strict(),
    ])
    .superRefine((e, o) => {
      jt(o, e);
    }),
  kx = t.enum([
    "NO_ACTIVE_TASK_OWNER",
    "STALE_TASK_OWNER_COMMAND",
    "OWNER_COMMAND_FAILED",
  ]),
  du = t.discriminatedUnion("success", [
    t
      .object({
        commandRequestId: P,
        success: t.literal(!0),
        taskCommand: af.optional(),
      })
      .strict(),
    t
      .object({
        commandRequestId: P,
        success: t.literal(!1),
        error: t.string(),
        code: kx.optional(),
      })
      .strict(),
  ]),
  pf = t.discriminatedUnion("type", [qg, Vg, Xg]).superRefine((e, o) => {
    (jt(o, e), e.type === "task_stream_mirror_batch" && Er(o, e));
  }),
  mf = t
    .discriminatedUnion("type", [
      qg.extend({ originHostId: P, deliveryPurpose: cu.optional() }).strict(),
      Vg.extend({ originHostId: P, deliveryPurpose: cu.optional() }).strict(),
      Xg.extend({ originHostId: P, deliveryPurpose: cu.optional() }).strict(),
    ])
    .superRefine((e, o) => {
      (jt(o, e), e.type === "task_stream_mirror_batch" && Er(o, e));
    });
function VU(e) {
  return e.issues
    .map(
      (o) => `${o.path.length > 0 ? o.path.join(".") : "<root>"}: ${o.message}`,
    )
    .join("; ");
}
c(VU, "formatZodError");
var y = t.string().trim().min(1),
  GU = t.array(t.string()),
  se = y.max(wn.transportEnvelopeIdMaxChars).regex(/^[A-Za-z0-9._~-]+$/u),
  Ix = t.object({
    workspacePath: y,
    workspaceIdentity: y.optional(),
    remoteSessionId: y.optional(),
    label: y,
    workspacePurpose: t.enum(["project", "conversation"]).optional(),
    kind: t.enum(["local", "remote"]),
    connectionState: t
      .enum(["connected", "disconnected", "reconnecting"])
      .optional(),
    lastConnectionError: t.string().optional(),
  }),
  ff = t.array(Ix),
  KU = t.object({ requestId: y, workspaceKey: y }),
  HU = t.union([
    t.object({ requestId: y, workspaceKey: y, success: t.literal(!0) }),
    t.object({
      requestId: y,
      workspaceKey: y,
      success: t.literal(!1),
      error: t.string(),
    }),
  ]),
  Cx = t.object({
    taskId: y,
    title: t.string(),
    workspacePath: y,
    workspaceIdentity: y.optional(),
    remoteSessionId: y.optional(),
    workspaceLabel: y,
    workspaceKind: t.enum(["local", "remote"]),
    createdAt: t.number().finite(),
    updatedAt: t.number().finite(),
    provider: re.optional(),
    unreadAt: t.number().finite().optional(),
    displayStatus: t.enum(["idle", "running", "completed", "error"]).optional(),
    pinned: t.boolean().optional(),
    archived: t.boolean().optional(),
  }),
  hf = t.array(Cx),
  uu = t.enum([
    "session-not-found",
    "session-expired",
    "session-conflict",
    "workspace-closed",
    "desktop-disconnected",
    "invalid-mobile-connection",
    "desktop-bootstrap-timeout",
    "connection-recovery-timeout",
    "relay-unavailable",
    "unsupported-action",
    "unexpected-error",
  ]),
  Rx = t.discriminatedUnion("kind", [
    t.object({
      bridgeSessionId: se,
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      kind: t.literal("local"),
      workspaceKey: y,
      workspacePath: y,
      initialTaskId: y.optional(),
    }),
    t.object({
      bridgeSessionId: se,
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      kind: t.literal("remote"),
      workspaceKey: y,
      workspacePath: y,
      workspaceIdentity: y,
      remoteSessionId: y,
      initialTaskId: y.optional(),
    }),
  ]),
  mu = t.object({
    activeWorkspaceKey: y.optional(),
    activeTaskId: y.optional(),
    updatedAt: t.number().finite(),
  }),
  Px = t.object({
    platform: y,
    version: y,
    name: y,
    userAgent: t.string().optional(),
    language: t.string().optional(),
    languages: t.array(t.string()).optional(),
    browserPlatform: t.string().optional(),
    viewport: t
      .object({
        width: t.number().finite(),
        height: t.number().finite(),
        devicePixelRatio: t.number().finite(),
      })
      .optional(),
    screen: t
      .object({ width: t.number().finite(), height: t.number().finite() })
      .optional(),
    timezone: t.string().optional(),
    online: t.boolean().optional(),
    updatedAt: t.number().finite(),
  }),
  Tx = t.object({
    windowControlSessionId: y,
    workspaces: ff,
    tasks: hf,
    initialViewState: mu.optional(),
    mobileViewState: mu.optional(),
  }),
  gf = t.object({
    workspaces: ff,
    tasks: hf.optional(),
    activeWorkspaceKey: y.optional(),
    activeTaskId: y.optional(),
  }),
  pu = t.enum([
    "isDockerAvailable",
    "listWSLDistros",
    "listDockerContainers",
    "listSSHConfigAliases",
    "loadMcpFromUserDirectory",
    "saveMcpToUserDirectory",
    "migrateLegacyCommonMcp",
  ]),
  wx = [
    t.object({ zcode_type: t.literal("bootstrap-request"), requestId: y }),
    t.object({
      zcode_type: t.literal("bootstrap-response"),
      requestId: y,
      success: t.literal(!0),
      result: Tx,
    }),
    t.object({ zcode_type: t.literal("workspace-list-request"), requestId: y }),
    t.object({
      zcode_type: t.literal("workspace-list-response"),
      requestId: y,
      success: t.literal(!0),
      result: gf,
    }),
    t.object({ zcode_type: t.literal("workspace-list-updated"), result: gf }),
    t.object({
      zcode_type: t.literal("workspace-bridge-open"),
      requestId: y,
      bridgeSessionId: se,
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      workspaceKey: y,
      taskId: y.optional(),
    }),
    t.object({
      zcode_type: t.literal("workspace-bridge-ready"),
      requestId: y,
      bridgeSessionId: se,
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      bridge: Rx,
    }),
    t.object({
      zcode_type: t.literal("workspace-bridge-error"),
      requestId: y,
      bridgeSessionId: se.optional(),
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      reason: uu,
      error: t.string(),
    }),
    t.object({
      zcode_type: t.literal("workspace-reconnect-request"),
      requestId: y,
      workspaceKey: y,
    }),
    t.object({
      zcode_type: t.literal("workspace-reconnect-response"),
      requestId: y,
      workspaceKey: y,
      success: t.literal(!0),
    }),
    t.object({
      zcode_type: t.literal("workspace-reconnect-response"),
      requestId: y,
      workspaceKey: y,
      success: t.literal(!1),
      error: t.string(),
    }),
    t.object({
      zcode_type: t.literal("mobile-view-state-update"),
      viewState: mu,
      deviceInfo: Px.optional(),
    }),
    t.object({
      zcode_type: t.literal("platform-request"),
      requestId: y,
      method: pu,
      args: t.unknown().optional(),
    }),
    t.object({
      zcode_type: t.literal("platform-response"),
      requestId: y,
      method: pu,
      success: t.literal(!0),
      result: t.unknown(),
    }),
    t.object({
      zcode_type: t.literal("platform-response"),
      requestId: y,
      method: pu,
      success: t.literal(!1),
      error: t.string(),
    }),
    On,
    au,
    t.object({
      zcode_type: t.literal("bridge-degraded"),
      bridgeSessionId: se,
      bridgeGeneration: t.number().int().nonnegative().optional(),
      recoveryId: se.optional(),
      reason: t.enum([
        "rpc-transport-fault",
        "rpc-frame-gap",
        "buffer-overflow",
        "buffer-timeout",
      ]),
      seq: t.number().int().nonnegative().optional(),
      expectedSeq: t.number().int().nonnegative().optional(),
      droppedCount: t.number().int().nonnegative().optional(),
    }),
    t.object({
      zcode_type: t.literal("app-error"),
      requestId: y.optional(),
      bridgeSessionId: se.optional(),
      reason: uu,
      error: t.string(),
    }),
    t.object({
      zcode_type: t.literal("mobile-diagnostic"),
      event: t.enum([
        "state-transition",
        "socket-close",
        "socket-error",
        "recover-start",
        "recover-scheduled",
        "pair-status",
        "failure",
      ]),
      timestamp: t.number().int().nonnegative(),
      state: t.string().optional(),
      previousState: t.string().optional(),
      pairStatus: t.enum(["waiting", "matched"]).optional(),
      closeCode: t.number().int().optional(),
      closeReason: t.string().optional(),
      wasClean: t.boolean().optional(),
      wasPaired: t.boolean().optional(),
      failureReason: uu.optional(),
      failureMessage: t.string().optional(),
      visibilityState: t.string().optional(),
      online: t.boolean().optional(),
      hiddenDurationMs: t.number().int().nonnegative().optional(),
    }),
  ],
  Ex = t.union(wx);
function JU(e) {
  let o = Ex.safeParse(e);
  return o.success ? o.data : null;
}
c(JU, "parseWebRemoteControlAppPayload");
var YU = t.record(t.string(), t.string()),
  XU = y,
  QU = t.string(),
  yf = t.object({
    kind: t.literal("ssh"),
    host: y,
    port: t.number().int().positive().max(65535).optional(),
    username: y,
    sshConfigAlias: y.optional(),
    password: t.string().optional(),
    privateKeyPath: t.string().optional(),
    privateKeyPassphrase: t.string().optional(),
    assetInstallMode: t.enum(xr).optional(),
    resourcePackages: t
      .object({ selectedPackageIds: t.array(t.string().refine(kr)).optional() })
      .optional(),
  }),
  bf = t.object({
    kind: t.literal("wsl"),
    distro: t.string().optional(),
    user: Pn.optional(),
  }),
  Ox = t.object({ kind: t.literal("docker"), container: y }),
  Ax = t.object({
    kind: t.literal("server"),
    url: t.string().url(),
    name: y.optional(),
    token: t.string().optional(),
    workspacePath: t.string().optional(),
    serverId: y.optional(),
  }),
  zn = t.discriminatedUnion("kind", [yf, bf, Ox, Ax]),
  eN = t.object({
    type: t.literal("zcode-hello"),
    version: t.string(),
    platform: t.string(),
    arch: t.string(),
    pid: t.number().int(),
  }),
  tN = t.object({
    type: t.literal("zcode-hello-ack"),
    version: t.string(),
    clientId: y,
  }),
  nN = t.object({
    level: t.enum(["info", "warn", "error"]),
    args: t.array(t.unknown()),
  }),
  oN = t.object({
    taskId: y,
    status: t.enum([
      "completed",
      "failed",
      "permission_request",
      "elicitation_request",
      "feedback_update",
    ]),
    requestId: y.optional(),
    title: t.string(),
    body: t.string(),
  }),
  zx = t.object({ clientTimezone: y, clientLanguage: y, screenResolution: y }),
  rN = t.object({
    context: zx,
    elementName: y,
    eventRegion: y,
    eventType: y,
    eventText: t.string().optional(),
    eventExtraDetail: t.record(t.string(), t.string()),
    userId: t.string().optional(),
    talkId: t.string().optional(),
    messageId: t.string().optional(),
  }),
  iN = t.object({
    name: y,
    group: y,
    value: t.number().finite().optional(),
    properties: t
      .record(
        t.string(),
        t.union([t.string(), t.number().finite(), t.boolean(), t.undefined()]),
      )
      .optional(),
  }),
  Mx = t.object({
    channel: y,
    payload: t.unknown(),
    sourceWindowId: t.number().int().optional(),
  }),
  Or = t.object({
    mockCdnDir: t.string().optional(),
    remoteCdnBaseUrl: t.string().optional(),
    remoteCdnBaseUrls: t.array(t.string()).optional(),
    remoteCacheDir: t.string().optional(),
  }),
  $x = t.object({ workspacePath: y, workspaceIdentity: y.optional() }),
  Dx = t.object({
    type: t.literal("init-local"),
    hostId: y.optional(),
    deliveryKind: An.optional(),
    deviceMid: t.string().optional(),
    feedbackApiBase: t.string().url().optional(),
    workspacePath: y.optional(),
    workspaceIdentity: y.optional(),
    agentWarmupTargets: t.array($x).max(3).optional(),
    agentSpawnFallbackCwd: y.optional(),
  }),
  Ux = t.object({
    type: t.literal("init-remote"),
    target: zn,
    remoteAssets: Or,
  }),
  Nx = t.object({
    type: t.literal("init-remote-workspace"),
    target: zn,
    remoteAssets: Or,
    workspacePath: y.optional(),
    workspaceIdentity: y.optional(),
    hostId: y.optional(),
    deliveryKind: An.optional(),
  }),
  Zx = t.object({
    type: t.literal("init-remote-ssh-host"),
    target: yf,
    remoteAssets: Or,
    hostId: y.optional(),
    deliveryKind: An.optional(),
  }),
  jx = t.object({
    type: t.literal("init-remote-wsl-host"),
    target: bf,
    remoteAssets: Or,
    hostId: y.optional(),
    deliveryKind: An.optional(),
  }),
  Bx = t
    .object({
      type: t.literal("attach-service-port"),
      attachmentId: y,
      clientMode: t.enum(["desktop-continuous", "web-remote-replayable"]),
    })
    .strict(),
  Lx = t.object({ type: t.literal("detach-service-port"), attachmentId: y }),
  Wx = t.object({
    type: t.literal("acquire-remote-workspace"),
    requestId: y,
    workspacePath: y,
    workspaceIdentity: y.optional(),
    generation: t.number().int().positive(),
  }),
  Fx = t.object({
    type: t.literal("release-remote-workspace"),
    workspacePath: y,
    workspaceIdentity: y.optional(),
    generation: t.number().int().positive(),
  }),
  qx = t.object({ type: t.literal("dispose") }),
  vf = t.object({ type: t.literal("broadcast"), message: Mx }),
  Vx = t.object({ type: t.literal("task-realtime-deliver"), event: mf }),
  Gx = t.object({ type: t.literal("task-run-lease-result"), result: tf }),
  Kx = t.object({ type: t.literal("task-owner-command-deliver"), command: uf }),
  Hx = t.object({ type: t.literal("task-owner-command-result"), result: du }),
  Jx = t.object({
    type: t.literal("bot-remote-workspace-reconnect-result"),
    requestId: y,
    ok: t.boolean(),
    sessionId: y.optional(),
    error: t.string().optional(),
  }),
  Yx = t.object({
    type: t.literal("bot-remote-workspace-connection-status-result"),
    requestId: y,
    ok: t.boolean(),
    connected: t.boolean().optional(),
    error: t.string().optional(),
  }),
  Xx = t.object({
    type: t.literal("bot-remote-workspace-runtime-port"),
    requestId: y,
    ok: t.boolean(),
    error: t.string().optional(),
  }),
  Sf = t.object({
    content: y,
    createdAt: y,
    fromSessionId: y,
    messageId: y,
    requestId: y,
    toSessionId: y,
  }),
  _f = t.object({
    error: t.string().optional(),
    messageId: y,
    requestId: y,
    sessionId: y,
    status: t.enum(["success", "failed"]),
  }),
  Qx = t.object({ sessionId: y }),
  ek = t.object({ type: t.literal("session-message-deliver"), request: Sf }),
  tk = t.object({
    type: t.literal("session-message-delivery-result"),
    result: _f,
  }),
  nk = t.object({
    type: t.literal("feedback-log-archive-result"),
    requestId: y,
    ok: t.boolean(),
    path: t.string().optional(),
    size: t.number().int().nonnegative().optional(),
    error: t.string().optional(),
  }),
  ok = t.object({
    type: t.literal("cron-run"),
    automationId: y,
    runId: y,
    workspacePath: y,
    workspaceIdentity: t.string().optional(),
    prompt: y,
    targetTaskId: y.optional(),
    model: t.string().optional(),
    provider: t.string().optional(),
    mode: t.string().optional(),
    thoughtLevel: t.string().optional(),
  }),
  rk = t.object({
    type: t.literal("off-peak-run"),
    offPeakTaskId: y,
    workspacePath: y,
    workspaceIdentity: t.string().optional(),
    prompt: y,
    permissionMode: y,
    model: t.string().optional(),
    thoughtLevel: t.string().optional(),
    conversationId: t.string().optional(),
    sessionId: t.string().optional(),
    serverTicketId: t.string().optional(),
  }),
  ik = t.object({
    type: t.literal("browser-execute-result"),
    requestId: y,
    result: $t,
  }),
  aN = t.discriminatedUnion("type", [
    Dx,
    Ux,
    Nx,
    Zx,
    jx,
    Bx,
    Lx,
    Wx,
    Fx,
    qx,
    vf,
    Vx,
    Gx,
    Kx,
    Hx,
    Jx,
    Yx,
    Xx,
    ek,
    tk,
    nk,
    ok,
    rk,
    ik,
  ]),
  ak = t.object({ type: t.literal("connected") }),
  sk = t.object({
    type: t.literal("remote-workspace-acquired"),
    requestId: y,
    workspacePath: y,
    workspaceIdentity: y.optional(),
    generation: t.number().int().positive(),
    ok: t.boolean(),
    error: t.string().optional(),
  }),
  ck = t.object({ type: t.literal("error"), error: t.string() }),
  lk = t.object({
    type: t.literal("log"),
    level: t.enum(["info", "warn", "error"]),
    source: t.string(),
    message: t.string(),
  });
var dk = t.enum(["claudeCode"]),
  uk = t.object({
    type: t.literal("agent-process-spawned"),
    pid: t.number().int().positive(),
    provider: re,
    workspacePath: y,
    command: t.string(),
    args: t.array(t.string()),
    startedAt: t.number().int().nonnegative(),
    runtimeGeneration: t.number().int().positive().optional(),
    runtimeInstanceId: y.optional(),
  }),
  pk = t.object({
    type: t.literal("agent-process-ready"),
    pid: t.number().int().positive(),
    provider: re,
    workspacePath: y,
    readyAt: t.number().int().nonnegative(),
    startupDurationMs: t.number().int().nonnegative(),
    runtimeGeneration: t.number().int().positive(),
    runtimeInstanceId: y,
  }),
  mk = t.object({
    type: t.literal("agent-process-exited"),
    pid: t.number().int().positive(),
    provider: re,
    workspacePath: y,
    exitCode: t.number().int().nullable(),
    signal: t.string().nullable(),
    endedAt: t.number().int().nonnegative(),
    terminationKind: t.enum(["expected", "unexpected", "watchdog_recycle"]),
    terminationReason: t.string().optional(),
    runtimeReady: t.boolean().optional(),
    runtimeGeneration: t.number().int().positive(),
    runtimeInstanceId: y.optional(),
    uptimeMs: t.number().int().nonnegative(),
    stderrLineCount: t.number().int().nonnegative(),
    stderrTail: t.array(t.string().max(1100)).max(20).optional(),
  }),
  gk = t.object({
    type: t.literal("agent-process-error"),
    pid: t.number().int().positive().nullable(),
    provider: re,
    workspacePath: y,
    command: t.string(),
    args: t.array(t.string()),
    errorName: y,
    errorCode: t.string().optional(),
    errorMessage: t.string(),
    errorStack: t.string().optional(),
    runtimeGeneration: t.number().int().positive(),
    runtimeInstanceId: y.optional(),
    occurredAt: t.number().int().nonnegative(),
  }),
  fk = t
    .object({
      type: t.literal("agent-resource-sample"),
      runtimeSurface: t.enum(["local", "remote"]),
      sample: mg,
    })
    .strict(),
  hk = t.object({
    type: t.literal("agent-running-task-count-changed"),
    runningTaskCount: t.number().int().nonnegative(),
  }),
  yk = t.object({
    type: t.literal("workspace-running-task-count-changed"),
    workspacePath: y,
    workspaceIdentity: y.optional(),
    runningTaskCount: t.number().int().nonnegative(),
  }),
  bk = t.object({
    type: t.literal("repo-wiki-running-task-count-changed"),
    runningTaskCount: t.number().int().nonnegative(),
  }),
  vk = t.object({ type: t.literal("task-realtime-publish"), event: pf }),
  Sk = t.object({
    type: t.literal("task-stream-op-publish"),
    target: lu,
    op: Jg,
  }),
  _k = t.object({ type: t.literal("task-run-lease-acquire"), request: ef }),
  xk = t.object({ type: t.literal("task-run-lease-release"), target: Qg }),
  kk = t.object({ type: t.literal("task-owner-command-request"), command: df }),
  Ik = t.object({ type: t.literal("task-owner-command-result"), result: du }),
  Ck = t.object({
    type: t.literal("bot-remote-workspace-reconnect-request"),
    requestId: y,
    workspacePath: y,
    workspaceIdentity: y,
    target: zn,
  }),
  Rk = t.object({
    type: t.literal("bot-remote-workspace-connection-status-request"),
    requestId: y,
    workspacePath: y,
    workspaceIdentity: y,
    target: zn,
  }),
  Pk = t.object({
    type: t.literal("bot-remote-workspace-runtime-port-request"),
    requestId: y,
    workspacePath: y,
    workspaceIdentity: y,
    target: zn,
  }),
  Tk = t.object({
    type: t.literal("session-message-send-requested"),
    request: Sf,
  }),
  wk = t.object({ type: t.literal("session-route-announce"), route: Qx }),
  Ek = t.object({
    type: t.literal("session-message-deliver-result"),
    result: _f,
  }),
  Ok = t.object({
    type: t.literal("feedback-log-archive-request"),
    requestId: y,
    sourceDir: y,
  }),
  Ak = t.object({
    type: t.literal("cron-run-result"),
    runId: y,
    ok: t.boolean(),
    taskId: t.string().optional(),
    sessionId: t.string().optional(),
    error: t.string().optional(),
    failureKind: t.enum(["transient", "permanent"]).optional(),
  }),
  zk = t.object({
    type: t.literal("off-peak-run-result"),
    offPeakTaskId: y,
    ok: t.boolean(),
    conversationId: t.string().optional(),
    sessionId: t.string().optional(),
    error: t.string().optional(),
    failureKind: t.enum(["transient", "permanent"]).optional(),
  }),
  Mk = t.object({
    type: t.literal("cron-scheduler-wake-request"),
    automationId: y,
  }),
  $k = t.object({
    type: t.literal("off-peak-scheduler-wake-request"),
    offPeakTaskId: t.string().optional(),
  }),
  Dk = t.object({
    type: t.literal("browser-execute-request"),
    requestId: y,
    browserId: y.optional(),
    browserGeneration: t.number().int().nonnegative().optional(),
    sessionId: y,
    turnId: y.optional(),
    workspaceKey: y.optional(),
    workspacePath: y.optional(),
    workspaceIdentity: y.optional(),
    remoteSessionId: y.optional(),
    clientMode: t
      .enum(["desktop-continuous", "web-remote-replayable"])
      .optional(),
    sessionContext: t.enum(["live", "cached"]).optional(),
    command: Mt,
  }),
  Uk = t.object({
    transport: t.enum(["http", "websocket", "rpc"]),
    interface: t.string(),
    durationMs: t.number(),
    ok: t.boolean(),
    statusCode: t.number().optional(),
    errorKind: t.string().optional(),
    attempt: t.number().int().positive().optional(),
    dnsMs: t.number().optional(),
    tcpMs: t.number().optional(),
    tlsMs: t.number().optional(),
    ttfbMs: t.number().optional(),
    downloadMs: t.number().optional(),
  }),
  Nk = t.object({
    type: t.literal("network-telemetry-batch"),
    observations: t.array(Uk).max(500),
  }),
  sN = t.discriminatedUnion("type", [
    ak,
    sk,
    ck,
    lk,
    uk,
    pk,
    mk,
    gk,
    fk,
    hk,
    yk,
    bk,
    vf,
    vk,
    Sk,
    _k,
    xk,
    kk,
    Ik,
    Ck,
    Rk,
    Pk,
    Tk,
    wk,
    Ek,
    Ok,
    Dk,
    Nk,
    Ak,
    zk,
    Mk,
    $k,
  ]),
  Zk = t.enum(["running", "completed", "error"]),
  jk = t.object({
    kind: t.literal("image"),
    filename: t.string(),
    mimeType: t.string(),
    sizeBytes: t.number().int().nonnegative().optional(),
    dataBase64: t.string().optional(),
    localPath: t.string().optional(),
  }),
  Bk = t.object({
    kind: t.literal("file"),
    filename: t.string(),
    mimeType: t.string(),
    sizeBytes: t.number().int().nonnegative(),
    dataBase64: t.string().optional(),
    textContent: t.string().optional(),
    localPath: t.string().optional(),
  }),
  Lk = t.discriminatedUnion("kind", [jk, Bk]),
  Wk = t.object({
    toolName: t.string().optional(),
    title: t.string().optional(),
    kind: t.string().optional(),
    status: t.enum(["completed", "failed", "denied", "stopped"]).optional(),
    input: t.unknown(),
    output: t.unknown().optional(),
    error: t.string().optional(),
    raw: t.unknown().optional(),
    snapshotRefs: t
      .array(
        t.object({
          field: t.enum(["input", "output", "raw"]),
          refId: t.string(),
          hash: t.string(),
          fullBytes: t.number().int().nonnegative(),
          previewBytes: t.number().int().nonnegative(),
        }),
      )
      .optional(),
  }),
  Fk = t.discriminatedUnion("type", [
    t.object({ type: t.literal("content"), content: t.string() }),
    t.object({ type: t.literal("thought"), content: t.string() }),
    t.object({
      type: t.literal("tool-call"),
      toolIndex: t.number().int().nonnegative(),
    }),
  ]),
  qk = t.object({
    id: t.string().optional(),
    role: t.enum(["user", "assistant"]),
    content: t.string(),
    timestamp: t.number().int().nonnegative(),
    model: t.string().optional(),
    characterCount: t.number().int().nonnegative().optional(),
    durationMs: t.number().int().nonnegative().optional(),
    interrupted: t.boolean().optional(),
    feedback: t.enum(["like", "dislike"]).optional(),
    attachments: t.array(Lk).optional(),
    tools: t.array(Wk).optional(),
    thought: t.string().optional(),
    parts: t.array(Fk).optional(),
    checkpointState: t.enum(["partial"]).optional(),
    checkpointReason: t
      .enum(["tool_completed", "part_boundary", "periodic"])
      .optional(),
    checkpointUpdatedAt: t.number().int().nonnegative().optional(),
    turnIndex: t.number().int().nonnegative().optional(),
    bodyRefs: t
      .array(
        t.object({
          field: t.enum(["content", "thought"]),
          refId: t.string(),
          hash: t.string(),
          fullBytes: t.number().int().nonnegative(),
          previewBytes: t.number().int().nonnegative(),
        }),
      )
      .optional(),
    toolSlice: t
      .object({
        persistedMessageIndex: t.number().int().nonnegative(),
        totalTools: t.number().int().nonnegative(),
        startToolIndex: t.number().int().nonnegative(),
        endToolIndexExclusive: t.number().int().nonnegative(),
      })
      .optional(),
  }),
  Vk = t.enum(["active", "paused", "budget_limited", "complete"]),
  Gk = t.enum([
    "set",
    "status_updated",
    "cleared",
    "usage_accounted",
    "run_started",
    "run_finished",
    "summary_updated",
  ]),
  Kk = t.enum(["command", "tool", "runtime"]),
  gu = t.object({
    sessionID: y,
    targetID: y,
    objective: y,
    summaryTitle: t.string().min(1).nullable().default(null),
    status: Vk,
    tokenBudget: t.number().int().positive().nullable(),
    tokensUsed: t.number().int().nonnegative(),
    timeUsedSeconds: t.number().int().nonnegative(),
    activeInputId: y.nullable().optional(),
    activeRunStartedAtMs: t.number().int().nonnegative().nullable().optional(),
    activeRunLastSeenAtMs: t.number().int().nonnegative().nullable().optional(),
    time: t.object({
      created: t.number().int().nonnegative(),
      updated: t.number().int().nonnegative(),
    }),
  }),
  cN = t.object({
    action: Gk,
    source: Kk,
    target: gu.nullable(),
    previousTarget: gu.nullable().optional(),
  });
var Hk = t.object({
    taskId: y,
    traceId: y,
    title: t.string(),
    titleOverridden: t.boolean().optional(),
    workspacePath: y,
    workspaceIdentity: y.optional(),
    workspacePurpose: t.enum(["project", "conversation"]).optional(),
    createdAt: t.number().int().nonnegative(),
    updatedAt: t.number().int().nonnegative(),
    mode: Ut,
    model: t.string().optional(),
    thoughtLevel: y.optional(),
    runtimeEpoch: t.number().int().nonnegative().optional(),
    provider: re.optional(),
    migrationSource: dk.optional(),
    forkedFromTaskId: y.optional(),
    cronAutomationId: y.optional(),
    offPeakTaskId: y.optional(),
    unreadAt: t.number().int().nonnegative().optional(),
    status: Zk.optional(),
    lastError: t
      .object({
        code: t.string().optional(),
        detail: t.string().optional(),
        message: t.string().min(1),
        traceId: y.optional(),
        taskId: y.optional(),
      })
      .optional(),
    repairState: t
      .object({
        claudeNativeSnapshotAssistantContentVersion: t
          .number()
          .int()
          .nonnegative()
          .optional(),
        codexNativeSnapshotSubagentToolsVersion: t
          .number()
          .int()
          .nonnegative()
          .optional(),
      })
      .optional(),
    changeSummary: t
      .object({
        fileCount: t.number().int().nonnegative(),
        added: t.number().int().nonnegative(),
        removed: t.number().int().nonnegative(),
        files: t.array(
          t.object({
            path: t.string(),
            added: t.number().int().nonnegative(),
            removed: t.number().int().nonnegative(),
            writeCount: t.number().int().positive(),
            lastTurnIndex: t.number().int().nonnegative(),
          }),
        ),
      })
      .optional(),
    target: gu.nullable().optional(),
  }),
  Jk = t.enum(["idle", "syncing", "ready", "stale", "failed"]),
  lN = t.object({
    provider: re,
    sessionId: y,
    lastSyncedTurnIndex: t.number().int(),
    state: Jk,
  }),
  Yk = t.object({ workspaceHash: y, taskId: y }),
  dN = t.object({ version: t.literal("1"), tasks: t.array(Yk) }),
  Xk = t.object({
    path: t.string(),
    beforeContent: t.string().nullable(),
    afterContent: t.string(),
    writeCount: t.number().int().positive(),
    contentRefs: t
      .array(
        t.object({
          field: t.enum(["beforeContent", "afterContent"]),
          refId: t.string(),
          hash: t.string(),
          fullBytes: t.number().int().nonnegative(),
          previewBytes: t.number().int().nonnegative(),
        }),
      )
      .optional(),
  }),
  Qk = t.object({
    turnIndex: t.number().int().nonnegative(),
    snapshots: t.array(Xk),
    fileState: t.enum(["applied", "reverted"]).optional(),
  }),
  eI = t.object({
    turnIndex: t.number().int().nonnegative(),
    baseFileCheckpointId: y,
    resultFileCheckpointId: y.optional(),
  }),
  uN = t.object({
    meta: Hk,
    messages: t.array(qk),
    fileChanges: t.array(Qk).optional(),
    turnCheckpoints: t.array(eI).optional(),
  });
var xf = "remote:",
  tI = { ssh: 3, wsl: 1, docker: 1, server: 1 };
function nI(e) {
  return e === "ssh" || e === "wsl" || e === "docker" || e === "server";
}
c(nI, "isRemoteWorkspaceIdentityKind");
function CN(e) {
  if (!e.startsWith(xf)) return null;
  let o = e.slice(xf.length),
    r = o.indexOf(":");
  if (r <= 0) return null;
  let a = o.slice(0, r);
  if (!nI(a)) return null;
  let n = r + 1;
  for (let s = 0; s < tI[a]; s++) {
    let l = o.indexOf(":", n);
    if (l <= n) return null;
    n = l + 1;
  }
  if (a === "wsl" && o[n] !== "/") {
    let s = o.indexOf(":", n);
    if (s <= n) return null;
    n = s + 1;
  }
  let i = o.slice(n);
  return i.startsWith("/") ? { kind: a, workspacePath: i } : null;
}
c(CN, "parseRemoteWorkspaceIdentity");
function rI(e, o) {
  return o === "win32" ? `${e}.exe` : e;
}
c(rI, "resolvePlatformBinaryName");
var mZ = {
  binaryKind: "native-binary",
  binaryEnvVar: "GLM_BINARY_PATH",
  bundledResourceDir: "glm",
  version: "0.13.3",
  spawnArgs: ["app-server", "--stdio"],
  nativeConfigDir: ".zcode/cli",
  nativeConfigFileName: "config.json",
  missingBinaryMessage:
    "[ZCode Agent] glm binary \u672A\u627E\u5230\uFF0C\u8BF7\u8BBE\u7F6E ZCODE_AGENT_WORKDIR\u3001GLM_BINARY_PATH \u6216\u5148\u51C6\u5907 GLM \u8FD0\u884C\u65F6\u8D44\u6E90",
  resolveEntrySegments: c(
    (e) => [rI("zcode-agent", e)],
    "resolveEntrySegments",
  ),
  nodeBundleEntryFile: "zcode.cjs",
  resolveNodeBundleSegments() {
    return [this.nodeBundleEntryFile];
  },
};
var bZ = "ZCODE_SERVICE_AUTHORITY_MODE";
var iI = 1,
  aI = t.object({
    path: t.string().trim().min(1),
    label: t.string().trim().min(1).optional(),
    workspaceIdentity: t.string().trim().min(1).optional(),
  }),
  IZ = t.object({
    serverId: t.string().trim().min(1),
    name: t.string().trim().min(1).optional(),
    version: t.string(),
    protocolVersion: t.literal(iI),
    authRequired: t.boolean(),
    workspaces: t.array(aI),
    capabilities: t.object({
      desktopContinuous: t.literal(!0),
      websocketRpc: t.literal(!0),
    }),
  }),
  CZ = t
    .object({
      capability: t.string().trim().min(1),
      expiresAt: t.number().int().positive(),
    })
    .strict();
var kf = "bigmodel";
var sI = "\u51ED\u636E\u89E3\u5BC6\u5931\u8D25\uFF1A",
  cI = "ZCODE_CREDENTIAL_DECRYPT_FAILED";
function zZ(e) {
  let o = lI(e);
  return o ? o === cI : !!dI(e).startsWith(sI);
}
c(zZ, "isCredentialDecryptError");
function lI(e) {
  return typeof e == "object" && e !== null && "code" in e
    ? String(e.code ?? "")
    : "";
}
c(lI, "readCredentialErrorCode");
function dI(e) {
  return e instanceof Error
    ? e.message
    : typeof e == "object" && e !== null && "message" in e
      ? String(e.message ?? "")
      : "";
}
c(dI, "readCredentialErrorMessage");
var uI = "none";
var pI = [{ value: "zcode-agent", label: "ZCode Agent" }],
  NZ = [{ value: uI, label: "\u672A\u6307\u5B9A" }, ...pI];
var mI = "https://cdn.zcode-ai.com/zcode/config/default.json";
function LZ(e, o = mI) {
  let r = new URL(o);
  return (r.searchParams.set("v", e.trim()), r.toString());
}
c(LZ, "buildVersionedRemoteAppConfigUrl");
function Lt(e) {
  return typeof e == "object" && e != null;
}
c(Lt, "isRecord");
function fu(e) {
  return typeof e == "string" && e.trim() !== "" ? e : void 0;
}
c(fu, "sanitizeUrl");
function WZ(e) {
  if (Lt(e)) return fu(e.feedback_url);
}
c(WZ, "getFeedbackUrlFromConfig");
function FZ(e) {
  if (!Lt(e)) return !1;
  let o = e.feedback_use_external_form;
  return o === !0 || o === "true";
}
c(FZ, "getFeedbackUseExternalFormFromConfig");
function If(e) {
  if (!Lt(e)) return {};
  let o = e.community_urls;
  return Lt(o) ? { "zh-CN": fu(o["zh-CN"]), "en-US": fu(o["en-US"]) } : {};
}
c(If, "getCommunityUrlsFromConfig");
function qZ(e, o, r) {
  let a = If(e),
    n = If(o);
  return a[r] ?? n[r];
}
c(qZ, "getCommunityUrlFromConfigs");
function VZ(e) {
  if (!Lt(e)) return;
  let o = e.forceUpdate;
  if (!Lt(o)) return;
  let r = o.minimalVersion;
  return typeof r == "string" && r.trim() !== "" ? r.trim() : void 0;
}
c(VZ, "getForceUpdateMinimalVersionFromConfig");
var XZ = `team-plan:${_e.bigmodelCodingPlan}:`;
var gI = "zcode-browser-restore://pending";
var fI = {
  NewTask: "newTask",
  OpenWorkspace: "openWorkspace",
  CloseActiveContext: "closeActiveContext",
  CloseWindow: "closeWindow",
  MinimizeWindow: "minimizeWindow",
  ToggleMaximizeWindow: "toggleMaximizeWindow",
  ToggleFullScreen: "toggleFullScreen",
  ResetZoom: "resetZoom",
  ZoomIn: "zoomIn",
  ZoomOut: "zoomOut",
  ShowAbout: "showAbout",
  OpenChangelog: "openChangelog",
  CheckForUpdates: "checkForUpdates",
  RelaunchApp: "relaunchApp",
  OpenFeedback: "openFeedback",
  OpenCommunity: "openCommunity",
  ExportLogs: "exportLogs",
  ToggleDevTools: "toggleDevTools",
  OpenProcessMonitor: "openProcessMonitor",
  ToggleZCodeStdioTapDevProxy: "toggleZCodeStdioTapDevProxy",
  SetZCodeEndpointProduction: "setZCodeEndpointProduction",
  SetZCodeEndpointTest: "setZCodeEndpointTest",
  SetZCodeEndpointCustom: "setZCodeEndpointCustom",
  ResetZCodeEndpoint: "resetZCodeEndpoint",
  StartPerformanceRecording: "startPerformanceRecording",
  StopPerformanceRecording: "stopPerformanceRecording",
  ClearAllData: "clearAllData",
};
function hu(e, o) {
  return { result: e, error_category: e === "success" ? "" : (o ?? "unknown") };
}
c(hu, "buildResultDetail");
function yu(e, o, r) {
  return {
    elementName: e,
    eventRegion: "web_remote_control",
    eventType: o,
    eventExtraDetail: r,
  };
}
c(yu, "buildWebRemoteControlEvent");
function uj(e) {
  return {
    elementName: "remote_workspace_connect_result",
    eventRegion: "remote_workspace",
    eventType: "result",
    eventExtraDetail: {
      result: e.result,
      remote_kind: e.remoteKind,
      connect_trigger: e.connectTrigger,
      error_category:
        e.result === "success" ? "" : (e.errorCategory ?? "unknown"),
    },
  };
}
c(uj, "buildRemoteWorkspaceConnectResultTelemetry");
function pj(e) {
  return yu("web_remote_control_start_result", "result", {
    ...hu(e.result, e.errorCategory),
    workspace_kind: e.workspaceKind,
    remote_kind: e.remoteKind ?? "",
  });
}
c(pj, "buildWebRemoteControlStartResultTelemetry");
function mj(e) {
  return yu("web_remote_control_pair_result", "result", {
    ...hu(e.result, e.errorCategory),
    pair_kind: e.pairKind,
    workspace_kind: e.workspaceKind,
    remote_kind: e.remoteKind ?? "",
  });
}
c(mj, "buildWebRemoteControlPairResultTelemetry");
function gj(e) {
  return yu("web_remote_control_bridge_result", "result", {
    ...hu(e.result, e.errorCategory),
    workspace_kind: e.workspaceKind,
    remote_kind: e.remoteKind ?? "",
    entry_kind: e.entryKind,
  });
}
c(gj, "buildWebRemoteControlBridgeResultTelemetry");
function hI(e) {
  if (typeof e == "string") return e.toLowerCase();
  if (typeof e != "object" || e === null) return "";
  let o = "code" in e ? String(e.code ?? "") : "",
    r = "message" in e ? String(e.message ?? "") : "";
  return `${o} ${r}`.toLowerCase();
}
c(hI, "readErrorSearchText");
function fj(e) {
  let o = hI(e);
  return /(auth|password|credential|token|permission|denied|unauthor)/.test(o)
    ? "auth"
    : /(deploy|download|install|asset|checksum)/.test(o)
      ? "deploy"
      : /(host_start|host start|spawn|process.*(?:exit|start)|host.*(?:exit|start))/.test(
            o,
          )
        ? "host_start"
        : /(attach|desktop_host_missing|workspace.*(?:identity|missing|mismatch)|remote_session)/.test(
              o,
            )
          ? "attach"
          : /(relay|websocket|web socket|pair|device.*(?:kicked|not.found))/.test(
                o,
              )
            ? "relay"
            : /(connect|network|socket|ssh|wsl|docker|server|timeout|timedout|econn)/.test(
                  o,
                )
              ? "connect"
              : "unknown";
}
c(fj, "classifyRemoteUsageError");
var yI = "zcodeLaunchMarks";
function bI(e) {
  return JSON.stringify(e);
}
c(bI, "serializeLaunchMarks");
function vI(e) {
  return e.toString(16).padStart(2, "0");
}
c(vI, "byteToHex");
function Cf(e) {
  let o = new Uint8Array(e);
  return (
    (o[6] = (o[6] & 15) | 64),
    (o[8] = (o[8] & 63) | 128),
    [
      o.slice(0, 4),
      o.slice(4, 6),
      o.slice(6, 8),
      o.slice(8, 10),
      o.slice(10, 16),
    ]
      .map((a) => Array.from(a, vI).join(""))
      .join("-")
  );
}
c(Cf, "formatUuid");
function SI() {
  let e = globalThis.crypto;
  if (e?.randomUUID) return e.randomUUID();
  if (e?.getRandomValues) {
    let r = new Uint8Array(16);
    return (e.getRandomValues(r), Cf(r));
  }
  let o = new Uint8Array(16);
  for (let r = 0; r < o.length; r += 1) o[r] = Math.floor(Math.random() * 256);
  return Cf(o);
}
c(SI, "createUuid");
var Uj = ["completed", "failed", "cancelled"];
var _I = [
    {
      id: "build",
      name: "Ask before changes",
      description: "Ask before each file changes.",
    },
    {
      id: "edit",
      name: "Edit automatically",
      description:
        "Edit selected files or relevant workspace files automatically.",
    },
    {
      id: "plan",
      name: "Plan mode",
      description: "Inspect the code and present a plan before editing.",
    },
    {
      id: "yolo",
      name: "Full access",
      description: "Edit and run commands with fewer confirmations.",
    },
  ],
  dB = new Set(_I.map((e) => e.id));
function Rf(e = new Date()) {
  let o = e.getFullYear(),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    a = String(e.getDate()).padStart(2, "0"),
    n = String(e.getHours()).padStart(2, "0"),
    i = String(e.getMinutes()).padStart(2, "0"),
    s = String(e.getSeconds()).padStart(2, "0"),
    l = String(e.getMilliseconds()).padStart(3, "0");
  return `${o}-${r}-${a} ${n}:${i}:${s}.${l}`;
}
c(Rf, "formatTimestamp");
function xI(e, o) {
  let r = Rf(),
    a = o != null ? ` [pid:${o}]` : "";
  return `[${r}]${a} [${e}]`;
}
c(xI, "formatLogPrefix");
var Pf = [
  {
    id: "zai",
    label: "Z.ai",
    oauthProviderId: "zai",
    apiKeyProviderId: _e.zai,
    startPlanProviderId: _e.zaiStartPlan,
    codingPlanProviderId: _e.zaiCodingPlan,
  },
  {
    id: "bigmodel",
    label: "BigModel",
    oauthProviderId: kf,
    apiKeyProviderId: _e.bigmodel,
    startPlanProviderId: _e.bigmodelStartPlan,
    codingPlanProviderId: _e.bigmodelCodingPlan,
  },
];
var OB = new Map(Pf.map((e) => [e.id, e])),
  AB = new Map(
    Pf.flatMap((e) =>
      [e.apiKeyProviderId, e.startPlanProviderId, e.codingPlanProviderId].map(
        (o) => [o, e.id],
      ),
    ),
  );
var gL = "DATA_BASE_DIR_FORBIDDEN_WINDOWS_INSTALL_DIR";
var SL = t
  .object({ askUserQuestionAutoResolutionEnabled: t.boolean() })
  .strict();
var II = "zcode";
function CI(e) {
  if (!e) return null;
  let o = e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return o ? o.slice(0, 24) : null;
}
c(CI, "sanitizeProcessNameSegment");
function Ee(...e) {
  let o = e.map((r) => CI(r)).filter((r) => !!r);
  return [II, ...o].join("-");
}
c(Ee, "joinZCodeProcessName");
function RI(e) {
  let o = e?.trim();
  return o
    ? (o
        .split(/[\\/]+/)
        .filter(Boolean)
        .at(-1) ?? o)
    : void 0;
}
c(RI, "pickWorkspaceTag");
function DL() {
  return Ee("main");
}
c(DL, "formatZCodeMainProcessName");
function UL() {
  return Ee("gpu");
}
c(UL, "formatZCodeGpuProcessName");
function NL(e) {
  return Ee("host", e);
}
c(NL, "formatZCodeHostProcessName");
function ZL(e) {
  let o = e?.trim();
  if (!o || o === "ZCode") return Ee("renderer", "main");
  if (o === "Process Monitor") return Ee("renderer", "process-monitor");
  let r = "ZCode - ";
  return o.startsWith(r)
    ? Ee("renderer", "remote", o.slice(r.length))
    : Ee("renderer", o);
}
c(ZL, "formatZCodeRendererProcessName");
function jL(e, o) {
  return Ee("agent", e, RI(o));
}
c(jL, "formatZCodeAgentProcessName");
function BL(e, o = "utility") {
  return Ee(o, e);
}
c(BL, "formatZCodeUtilityProcessName");
function bu(e, o) {
  return o === "win32" ? `${e}.exe` : e;
}
c(bu, "resolvePlatformBinaryName");
var vu = {
    bfs: {
      binaryEnvVar: "ZCODE_BFS_BINARY",
      bundledResourceDir: "bfs",
      resolveEntrySegments: c((e) => [bu("bfs", e)], "resolveEntrySegments"),
    },
    ripgrep: {
      binaryEnvVar: "ZCODE_RG_BINARY",
      bundledResourceDir: "ripgrep",
      resolveEntrySegments: c((e) => [bu("rg", e)], "resolveEntrySegments"),
    },
    ugrep: {
      binaryEnvVar: "ZCODE_UGREP_BINARY",
      bundledResourceDir: "ugrep",
      resolveEntrySegments: c((e) => [bu("ugrep", e)], "resolveEntrySegments"),
    },
  },
  PI = {
    bfs: { ...vu.bfs, versions: { linux: "v4.1.1-2" } },
    ripgrep: {
      ...vu.ripgrep,
      versions: { darwin: "v13.0.0-10", linux: "v14.1.1-1" },
    },
    ugrep: { ...vu.ugrep, versions: { linux: "v7.5.0-2" } },
  };
function JL(e) {
  return Object.entries(PI).flatMap(([o, r]) => {
    let a = r.versions[e];
    return a ? [{ toolId: o, runtime: r, version: a }] : [];
  });
}
c(JL, "getRemoteRuntimeToolsForPlatform");
var TI = [
  "Read",
  "Write",
  "Edit",
  "ApplyPatch",
  "Bash",
  "Glob",
  "Grep",
  "WebFetch",
  "WebSearch",
  "web_search",
  "TodoRead",
  "TodoWrite",
  "GoalRead",
  "ReadSessionContext",
  "AskUserQuestion",
  "SendMessage",
  "RespondToCoordinator",
  "TaskOutput",
  "TaskStop",
  "js",
  "js_reset",
  "js_add_node_module_dir",
  "mcp__node_repl__js",
  "mcp__node_repl__js_reset",
  "mcp__node_repl__js_add_node_module_dir",
  "Agent",
  "Task",
  "Skill",
];
var _W = new Map(TI.map((e) => [e.toLowerCase(), e]));
function NW({
  baseUrl: e,
  deviceSid: o,
  passHash: r,
  timestamp: a,
  deviceMid: n,
  deviceName: i,
  appVersion: s,
  theme: l,
}) {
  let p = new URL(e);
  return (
    p.searchParams.set("sid", o),
    p.searchParams.set("hash", r),
    p.searchParams.set("t", String(a)),
    n?.trim() && p.searchParams.set("mid", n),
    i?.trim() && p.searchParams.set("name", i),
    s?.trim() && p.searchParams.set("app_version", s),
    p.toString()
  );
}
c(NW, "buildWebRemoteControlExternalQrUrl");
function ZW(e) {
  return e.workspaceIdentity?.trim() || e.workspacePath;
}
c(ZW, "resolveWebRemoteControlWorkspaceKey");
function Tf(e) {
  let o = e.trim().replace(/^v/i, ""),
    r = o.match(
      /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$/,
    );
  if (r)
    return {
      major: Number(r[1]),
      minor: Number(r[2]),
      patch: Number(r[3]),
      prerelease: r[4]?.split(".") ?? [],
    };
  let a = o.match(/^(\d+)$/);
  if (a) return { major: Number(a[1]), minor: 0, patch: 0, prerelease: [] };
  let n = o.match(/^(\d+)\.(\d+)$/);
  return n
    ? { major: Number(n[1]), minor: Number(n[2]), patch: 0, prerelease: [] }
    : null;
}
c(Tf, "parseSemver");
function wI(e, o) {
  if (e.length === 0 && o.length === 0) return 0;
  if (e.length === 0) return 1;
  if (o.length === 0) return -1;
  let r = Math.max(e.length, o.length);
  for (let a = 0; a < r; a += 1) {
    let n = e[a],
      i = o[a];
    if (n === void 0) return -1;
    if (i === void 0) return 1;
    let s = /^\d+$/.test(n),
      l = /^\d+$/.test(i);
    if (s && l) {
      let u = Number(n) - Number(i);
      if (u !== 0) return u > 0 ? 1 : -1;
      continue;
    }
    if (s !== l) return s ? -1 : 1;
    let p = n.localeCompare(i);
    if (p !== 0) return p > 0 ? 1 : -1;
  }
  return 0;
}
c(wI, "comparePrerelease");
function EI(e, o) {
  let r = Tf(e),
    a = Tf(o);
  if (!r || !a) return null;
  for (let n of ["major", "minor", "patch"]) {
    let i = r[n] - a[n];
    if (i !== 0) return i > 0 ? 1 : -1;
  }
  return wI(r.prerelease, a.prerelease);
}
c(EI, "compareSemverVersions");
function HW(e) {
  let o = e.forceUpdate?.minimalVersion.trim();
  if (!o) return null;
  let r = EI(e.currentVersion, o);
  return r === null || r >= 0
    ? null
    : { currentVersion: e.currentVersion, minimalVersion: o };
}
c(HW, "resolveForceUpdateRequirement");
var OI = "studio.zcode-ai.com";
function wf() {
  return globalThis.process?.env ?? {};
}
c(wf, "readProcessEnv");
function Ef(e = wf()) {
  return e.INTRANET_MACHINE_HOST?.trim() || OI;
}
c(Ef, "resolveIntranetMachineHost");
var Of = Ef(),
  Af = 12345,
  AI = `http://${Of}:${Af}/zcode`,
  nF = `${AI}/deps`,
  zI = 3850,
  MI = "/api/intranet/probe",
  $I = `http://${Of}:${zI}${MI}`;
function oF(e = wf()) {
  let o = e.ZCODE_DEPS_BASE_URL?.trim();
  return o ? o.replace(/\/+$/, "") : `http://${Ef(e)}:${Af}/zcode/deps`;
}
c(oF, "resolveIntranetDepsBaseUrl");
var Mn = "v2",
  DI = "v1",
  zf = "v1";
function We(e, o) {
  return `repo_snapshot_${e}/${o}`;
}
c(We, "repoSnapshotSchema");
var IF = We("manifest", Mn),
  CF = We("prompt", Mn),
  RF = We("delta", Mn),
  PF = We("encrypted_artifact", Mn),
  TF = We("encryption_aad", Mn),
  wF = We("manifest_hash", DI),
  EF = We("upload_key", zf),
  OF = We("upload_target", zf);
function Mf(e, o, r) {
  for (let a = o; a < r; a += 1) if (e[a]?.kind === "local") return a;
  return null;
}
c(Mf, "findLocalWorkspaceSessionIndex");
function FF(e, o) {
  if (e.length === 0) return null;
  let r = Math.min(Math.max(o ?? 0, 0), e.length - 1),
    a = Mf(e, r, e.length);
  return a ?? Mf(e, 0, r);
}
c(FF, "resolveStartupLocalWorkspaceSessionIndex");
var $f = t.object({
    id: t.string().uuid(),
    runtimeScope: t.enum(["main", "subagent"]),
    token: t.string().min(32),
    sessionId: t.string().trim().min(1),
    turnId: t.string().trim().min(1).optional(),
    trace: t
      .object({
        traceId: t.string().trim().min(1),
        spanId: t.string().trim().min(1).optional(),
        parentSpanId: t.string().trim().min(1).optional(),
      })
      .strict()
      .optional(),
  }),
  o4 = t.discriminatedUnion("op", [
    $f.extend({ op: t.literal("list") }).strict(),
    $f
      .extend({
        op: t.literal("execute"),
        browserId: t.string().trim().min(1),
        browserGeneration: t.number().int().nonnegative(),
        command: Mt,
      })
      .strict(),
  ]),
  r4 = t.discriminatedUnion("ok", [
    t
      .object({
        id: t.string().uuid(),
        ok: t.literal(!0),
        browsers: t.array(Od).optional(),
        result: $t.optional(),
      })
      .strict(),
    t
      .object({
        id: t.string().uuid(),
        ok: t.literal(!1),
        error: t.string().min(1),
      })
      .strict(),
  ]);
export {
  Ar as a,
  Zf as b,
  jf as c,
  Bf as d,
  kh as e,
  Ph as f,
  _u as g,
  Lf as h,
  Wf as i,
  Ff as j,
  qf as k,
  Vf as l,
  BC as m,
  wh as n,
  t as o,
  Sr as p,
  Pm as q,
  Ad as r,
  Om as s,
  Sz as t,
  Md as u,
  Dt as v,
  et as w,
  Xv as x,
  tS as y,
  Fd as z,
  zr as A,
  Gf as B,
  he as C,
  ih as D,
  xu as E,
  KI as F,
  HI as G,
  JI as H,
  ah as I,
  YI as J,
  XI as K,
  QI as L,
  eC as M,
  sh as N,
  tC as O,
  Tn as P,
  _S as Q,
  xS as R,
  Ut as S,
  _e as T,
  SM as U,
  _M as V,
  og as W,
  tt as X,
  IS as Y,
  RS as Z,
  ag as _,
  sg as $,
  OS as aa,
  MS as ba,
  Qd as ca,
  Te as da,
  U_ as ea,
  rU as fa,
  iU as ga,
  aU as ha,
  sU as ia,
  wn as ja,
  nx as ka,
  ae as la,
  su as ma,
  SU as na,
  ge as oa,
  _U as pa,
  Ng as qa,
  yx as ra,
  VU as sa,
  y as ta,
  GU as ua,
  ff as va,
  HU as wa,
  hf as xa,
  JU as ya,
  YU as za,
  XU as Aa,
  QU as Ba,
  zn as Ca,
  eN as Da,
  nN as Ea,
  oN as Fa,
  rN as Ga,
  iN as Ha,
  Mx as Ia,
  sN as Ja,
  Hk as Ka,
  uN as La,
  CN as Ma,
  mZ as Na,
  ch as Oa,
  aC as Pa,
  vh as Qa,
  sC as Ra,
  cC as Sa,
  bZ as Ta,
  mC as Ua,
  gC as Va,
  fC as Wa,
  hC as Xa,
  yC as Ya,
  kf as Za,
  sI as _a,
  cI as $a,
  zZ as ab,
  xC as bb,
  xh as cb,
  kC as db,
  TC as eb,
  mI as fb,
  LZ as gb,
  WZ as hb,
  FZ as ib,
  qZ as jb,
  VZ as kb,
  gI as lb,
  fI as mb,
  uj as nb,
  pj as ob,
  mj as pb,
  gj as qb,
  fj as rb,
  yI as sb,
  bI as tb,
  SI as ub,
  Uj as vb,
  Rf as wb,
  xI as xb,
  gL as yb,
  DL as zb,
  UL as Ab,
  NL as Bb,
  ZL as Cb,
  jL as Db,
  BL as Eb,
  JL as Fb,
  NW as Gb,
  ZW as Hb,
  HW as Ib,
  oF as Jb,
  FF as Kb,
};

/**
 * @blockrun/clawrouter
 *
 * Smart LLM router for OpenClaw — 55+ models, x402 micropayments, 78% cost savings.
 * Routes each request to the cheapest model that can handle it.
 *
 * Usage:
 *   # Install the plugin
 *   openclaw plugins install @blockrun/clawrouter
 *
 *   # Fund your wallet with USDC on Base (address printed on install)
 *
 *   # Use smart routing (auto-picks cheapest model)
 *   openclaw models set blockrun/auto
 *
 *   # Or use any specific BlockRun model
 *   openclaw models set openai/gpt-5.3
 */
import type { OpenClawPluginDefinition } from "./types.js";
declare const plugin: OpenClawPluginDefinition;
export default plugin;
export { startProxy, getProxyPort } from "./proxy.js";
export type { ProxyOptions, ProxyHandle, WalletConfig, PaymentChain, LowBalanceInfo, InsufficientFundsInfo, } from "./proxy.js";
export type { WalletResolution } from "./auth.js";
export { blockrunProvider } from "./provider.js";
export { OPENCLAW_MODELS, BLOCKRUN_MODELS, buildProviderModels, MODEL_ALIASES, resolveModelAlias, isAgenticModel, getAgenticModels, getModelContextWindow, } from "./models.js";
export { route, DEFAULT_ROUTING_CONFIG, getFallbackChain, getFallbackChainFiltered, calculateModelCost, } from "./router/index.js";
export type { RoutingDecision, RoutingConfig, Tier } from "./router/index.js";
export { logUsage } from "./logger.js";
export type { UsageEntry } from "./logger.js";
export { RequestDeduplicator } from "./dedup.js";
export type { CachedResponse } from "./dedup.js";
export { BalanceMonitor, BALANCE_THRESHOLDS } from "./balance.js";
export type { BalanceInfo, SufficiencyResult } from "./balance.js";
export { SolanaBalanceMonitor } from "./solana-balance.js";
export type { SolanaBalanceInfo } from "./solana-balance.js";
export { SpendControl, FileSpendControlStorage, InMemorySpendControlStorage, formatDuration, } from "./spend-control.js";
export type { SpendWindow, SpendLimits, SpendRecord, SpendingStatus, CheckResult, SpendControlStorage, SpendControlOptions, } from "./spend-control.js";
export { generateWalletMnemonic, isValidMnemonic, deriveEvmKey, deriveSolanaKeyBytes, deriveAllKeys, } from "./wallet.js";
export type { DerivedKeys } from "./wallet.js";
export { setupSolana, savePaymentChain, loadPaymentChain, resolvePaymentChain } from "./auth.js";
export { InsufficientFundsError, EmptyWalletError, RpcError, isInsufficientFundsError, isEmptyWalletError, isBalanceError, isRpcError, } from "./errors.js";
export { fetchWithRetry, isRetryable, DEFAULT_RETRY_CONFIG } from "./retry.js";
export type { RetryConfig } from "./retry.js";
export { getStats, formatStatsAscii, clearStats } from "./stats.js";
export type { DailyStats, AggregatedStats } from "./stats.js";
export { SessionStore, getSessionId, hashRequestContent, DEFAULT_SESSION_CONFIG, } from "./session.js";
export type { SessionEntry, SessionConfig } from "./session.js";
export { ResponseCache } from "./response-cache.js";
export type { CachedLLMResponse, ResponseCacheConfig } from "./response-cache.js";
export { PARTNER_SERVICES, getPartnerService, buildPartnerTools } from "./partners/index.js";
export type { PartnerServiceDefinition, PartnerToolDefinition } from "./partners/index.js";
//# sourceMappingURL=index.d.ts.map
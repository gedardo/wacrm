-- ============================================================
-- 031_add_gemini_openrouter_providers.sql — Add Gemini & OpenRouter LLM Providers
--
-- Drops the old check constraint limiting provider to 'openai' or 'anthropic'
-- and adds a new constraint that permits 'gemini' and 'openrouter'.
-- ============================================================

ALTER TABLE ai_configs DROP CONSTRAINT IF EXISTS ai_configs_provider_check;
ALTER TABLE ai_configs ADD CONSTRAINT ai_configs_provider_check CHECK (provider = ANY (ARRAY['openai'::text, 'anthropic'::text, 'gemini'::text, 'openrouter'::text]));

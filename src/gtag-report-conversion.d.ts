/**
 * Tipagem para o snippet de conversão "Compra" do Google Ads (gtag_report_conversion).
 * Chamar ao clicar no botão/link de compra.
 * @param url - Opcional. Se informado, redireciona para esta URL após enviar a conversão (no callback).
 */
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export {};

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import InformationSection from "../Cards/InformationSection";
import PlanCard from "../Cards/PlanCard";

export function Pricing() {
  return (
    <InformationSection id="fiyatlandirma">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <PlanCard
            title="Temel Paket"
            tags={[
              "720p Video Düzenleme",
              "Catering Hizmeti",
              "Otopark Hizmeti",
            ]}
          />
          <PlanCard
            title="Düğün Paketi"
            tags={[
              "Temel Paket İçeriği",
              "Müzik ve Eğlence",
              "Premium Video Şablonları",
              "İşbirliği Araçları",
            ]}
            popular
          />
          <PlanCard
            title="Kurumsal Paket"
            tags={[
              "Temel Paket İçeriği",
              "Müzik ve Eğlence",
              "Fotoğraf ve Video Hizmetleri",
              "Özel Vale Hizmeti",
              "Özel Güvenlik Hizmeti",
              "İşbirliği Araçları",
            ]}
          />
        </div>
      </div>
    </InformationSection>
  );
}

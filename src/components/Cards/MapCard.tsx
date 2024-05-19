import InformationSection from "./InformationSection";
import DescriptionCard from "./DescriptionCard";

export default function MapCard() {
  return (
    <InformationSection id="ulasim">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.9970445494037!2d32.797512976442555!3d39.986171381731424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34bf0f51cf46b%3A0xf9a948d87ca30b42!2sBur%C3%A7%2C%20Piri%20Cd.%2078%20C%2C%2006210%20Yenimahalle%2FAnkara!5e0!3m2!1sen!2str!4v1715987001564!5m2!1sen!2str"
        className="h-[20rem] w-full rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        id="google-map"
      ></iframe>
      <DescriptionCard title="Ulaşım">
        <p>
          Piri Caddesi, No: 30, Burç Mahallesi, Ankara&apos;daki düğün
          salonumuza ulaşmak için Kızılay&apos;dan Batıkent yönüne giden metroya
          binip Atatürk Kültür Merkezi&apos;nde inin ve 210 numaralı otobüse
          geçerek Piri Caddesi durağında inebilirsiniz. Özel araçla
          geliyorsanız, Eskişehir Yolu üzerinden Burç Mahallesi tabelalarını
          takip edin. Salonumuzun önünde geniş bir otopark bulunmaktadır
        </p>
      </DescriptionCard>
    </InformationSection>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ServicePage } from "@/components/service/ServicePage";
import styles from "@/components/service/ServicePage.module.css";
import { getServicePage, servicePages } from "@/content/servicePages";
import { services } from "@/content/services";

// One standalone page per service, all from the same template. There is no
// /services hub: visitors move between services through the nav menu and the
// "next service" link at the end of each page. data-theme="gray" switches on the
// grayscale prototype tokens (styles/service-gray.css).
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: `${service.title} | Spadafy`, description: service.description } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const i = services.findIndex((s) => s.slug === slug);
  if (!page || i < 0) notFound();
  const next = services[(i + 1) % services.length];

  return (
    <>
      <main id="main" className={styles.page} data-theme="gray" data-behind-menu>
        <ServicePage page={page} service={services[i]} next={next} />
      </main>
      <Footer />
    </>
  );
}

import { BulkReplaceApp } from "@/components/bulk-replace/bulk-replace-app";
import { dictionaries } from "@/i18n/dictionaries";
import Link from "next/link";

export function HomePage({ lang }: { lang: "en" | "fr" | "de" | "pt-br" }) {
  const dict = dictionaries[lang];

  return (
    <div className="w-full flex flex-col items-center pb-24">
      <section className="w-full max-w-4xl mx-auto px-4 py-8 text-center md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.pageH1}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {dict.pageIntro}
        </p>
      </section>

      <div className="w-full max-w-4xl mx-auto px-4 mb-8 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_1">
          {dict.adAdvertisement}
        </div>
      </div>

      <div id="tool" className="w-full mb-16">
        <BulkReplaceApp dict={dict} />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_2">
          {dict.adAdvertisement}
        </div>
      </div>

      <article className="w-full max-w-3xl mx-auto px-4 prose prose-slate dark:prose-invert">
        <h2>{dict.articleTitle1}</h2>
        <p>{dict.articleP1}</p>
        <p>{dict.articleP2}</p>
        
        <h2>{dict.articleTitle2}</h2>
        <p>{dict.articleP3}</p>
        <ol>
          <li>{dict.li1}</li>
          <li>{dict.li2}</li>
          <li>{dict.li3}</li>
          <li>{dict.li4}</li>
          <li>{dict.li5}</li>
        </ol>

        <h2>{dict.articleTitle3}</h2>
        <p>{dict.articleP4}</p>
        <p>{dict.articleP5}</p>

        <h2>{dict.articleTitle4}</h2>
        <p>{dict.articleP6}</p>
        <ul>
          <li>{dict.useCase1}</li>
          <li>{dict.useCase2}</li>
          <li>{dict.useCase3}</li>
          <li>{dict.useCase4}</li>
          <li>{dict.useCase5}</li>
          <li>{dict.useCase6}</li>
        </ul>

        <div className="not-prose my-12">
          <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_3">
            {dict.adAdvertisement}
          </div>
        </div>

        <h2>{dict.articleTitle5}</h2>
        <p>{dict.articleP7}</p>

        <h2 id="faq">{dict.faqTitle}</h2>
        
        <div className="space-y-6 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <div key={num}>
              <h3 className="text-xl font-semibold mt-0 mb-2">{dict[`faq${num}Q` as keyof typeof dict]}</h3>
              <p className="mt-0">{dict[`faq${num}A` as keyof typeof dict]}</p>
            </div>
          ))}
        </div>
      </article>

      <div className="w-full max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_4">
          {dict.adAdvertisement}
        </div>
      </div>
    </div>
  );
}

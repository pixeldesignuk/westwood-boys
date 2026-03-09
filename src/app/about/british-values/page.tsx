import type { Metadata } from "next"
import { PageHero } from "@/components/sections"
import { Section, Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "British Values",
  description: "Our commitment to promoting British Values at Westwood Boys School.",
}

export default function BritishValuesPage() {
  return (
    <>
      <PageHero
        title="Promoting British Values"
        subtitle="Our School"
      />

      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-text-secondary mb-4">
              Our School is committed to serving its community. It recognises the multi-cultural, multi faith and ever-changing nature of modern Britain. It also understands the vital role it has in ensuring that groups or individuals within the school are not subjected to intimidation or radicalisation by those wishing to influence them.
            </p>

            <p className="text-body text-text-secondary mb-4">
              It follows equal opportunities guidance which guarantees that there will be no discrimination against any individual or group, regardless of faith, ethnicity, gender, sexuality, political or financial status, or similar. Our School is dedicated to preparing students for adult life beyond classroom learning.
            </p>

            <p className="text-body text-text-secondary mb-4">
              The Government emphasises that schools are required to ensure that key &lsquo;British Values&rsquo; are taught in all UK schools.
            </p>

            <p className="text-body text-text-secondary mb-6">
              The five British Values are:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-8">
              <li>Democracy</li>
              <li>The rule of law</li>
              <li>Individual liberty</li>
              <li>Mutual respect</li>
              <li>Tolerance of those of different faiths and beliefs</li>
            </ul>

            <p className="text-body text-text-secondary mb-8">
              Our curriculum and assembly programme seek to embed British values from an early age.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">Democracy</h2>
            <p className="text-body text-text-secondary mb-8">
              Democratic principles are consistently reinforced in school, for instance, elections are held for Head Boy and School Councillors. The principle of democracy is also explored in PSHCE lessons and assemblies.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">The Rule of Law</h2>
            <p className="text-body text-text-secondary mb-8">
              The importance of laws, whether they be those that govern the class, the school, or the country, are consistently reinforced at our School. Students are taught the rules and expectations of the school which are highlighted by the student code of conduct. They are taught the value and the reasons behind laws that govern and protect us, the responsibilities that this involves and the consequences when laws are broken. Visits from authorities such as the Police and Fire Service reinforce this message.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">Individual Liberty</h2>
            <p className="text-body text-text-secondary mb-4">
              At Westwood Boys School, students are encouraged to make independent choices, with the knowledge that they are in a safe, secure and supportive environment. Staff educate and provide boundaries for students to make informed choices, through a safe environment and an empowering education.
            </p>
            <p className="text-body text-text-secondary mb-8">
              Students are encouraged to know, understand and exercise their rights and personal freedoms and are advised on how to exercise these safely, for example through e-safety lessons so that they can keep safe online.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">Mutual Respect</h2>
            <p className="text-body text-text-secondary mb-4">
              Respect is at the heart of our school. Students learn that their behaviour and conduct has an effect on their own rights and those of others. All members of the school community treat each other with respect and this is reiterated through the teaching and learning process.
            </p>
            <p className="text-body text-text-secondary mb-8">
              Mutual respect is embraced throughout the curriculum by providing the opportunity for students to express their views in a safe environment.
            </p>

            <h2 className="font-serif text-h3 text-brand-navy mb-4">Tolerance of Those of Different Faiths and Beliefs</h2>
            <p className="text-body text-text-secondary mb-4">
              This is achieved through equipping students with the ability to understand their place in a culturally diverse society and by giving the opportunities to experience such diversity within the school community. Students benefit from a number of external visitors and educational and recreational visits. The Religious Studies curriculum provides a broad and balanced education on a range of faiths, religions and cultures.
            </p>
            <p className="text-body text-text-secondary mb-8">
              Through our SMSC programme, we help students to develop their self-knowledge, self-esteem and self-confidence; distinguish right from wrong and to respect both religious and English law; encourage students to accept responsibility for their behaviour, show initiative and contribute positively to society; enable students to acquire a broad general knowledge of, and respect for, public institutions and services and to appreciate and respect their own and other cultures.
            </p>

            <p className="text-body text-text-secondary">
              We hope our educational offer will prepare our young people for the challenges and opportunities of modern Britain.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

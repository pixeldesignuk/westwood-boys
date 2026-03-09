import { Section, Container, SectionHeader } from "@/components/ui/section"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    quote: "Westwood Boys has transformed my son. He's more confident, more focused, and truly passionate about learning. The combination of academic excellence and Islamic values is exactly what we were looking for.",
    author: "Fatima Khan",
    role: "Parent of Year 10 Student",
  },
  {
    quote: "The teachers here genuinely care about every student. The small class sizes mean my son gets the attention he needs, and he's thriving both academically and personally.",
    author: "Ahmed Hassan",
    role: "Parent of Year 8 Student",
  },
  {
    quote: "Coming to Westwood Boys was the best decision of my life. The school helped me achieve grades I never thought possible and prepared me for university. The Islamic foundation gave me a strong moral compass.",
    author: "Ibrahim Malik",
    role: "Former Student, Class of 2023",
  },
]

export function TestimonialsSection() {
  return (
    <Section background="cream" padding="lg">
      <Container>
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Community Says"
          description="Hear from parents and students about their experiences at Westwood Boys School."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.author}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                variant={index === 1 ? "feature" : "default"}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

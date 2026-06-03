import CourseCard from "@/components/common/CourseCard";

type CourseSectionProps = {
  items: readonly {
    title: string;
    description: string;
  }[];
};

export default function CourseSection({ items }: CourseSectionProps) {
  return (
    <section id="course" className="mt-12 grid gap-8 lg:grid-cols-3">
      {items.map((item) => (
        <CourseCard
          key={item.title}
          description={item.description}
          title={item.title}
        />
      ))}
    </section>
  );
}

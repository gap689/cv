
type HeadingProps = {
    summary: string,
}

export default function About(
    { summary
    }: HeadingProps
) {
  return (
    <section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {summary}
      </p>
    </section>
   )
}

export default function ContentHub({
  params,
}: {
  params: { contentHub: string };
}) {
  return <div>hey {params.contentHub}</div>;
}

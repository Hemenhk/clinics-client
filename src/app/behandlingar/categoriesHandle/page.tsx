import React from "react";

export default function CategoryPage({
  params,
}: {
  params: { treatmentHandle: string };
}) {
  const { treatmentHandle } = params;
  return <div>{treatmentHandle}</div>;
}

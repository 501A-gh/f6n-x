import { auth } from "@/server/auth";
import React from "react";
import Breadcrumbs from "./breadcrumbs";

export default async function BreadcrumbsParent() {
  const session = await auth();
  if (!session) return null;

  return <Breadcrumbs />;
}

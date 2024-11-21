"use client";

import { useModal } from "@/providers/modal-provider";

const MovieDetails: React.FC = () => {
  const { data, loading } = useModal();
  console.log("data:", data, loading);

  return <span>content</span>;
};

export default MovieDetails;

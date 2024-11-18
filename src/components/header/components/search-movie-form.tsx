"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "../icons";
import { SearchFormValues, searchSchema } from "./schema";

export default function SearchMovieForm() {
  const router = useRouter();
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values: SearchFormValues) => {
    router.push(`/search/${encodeURIComponent(values.query)}/1`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 sm:mt-0">
        <FormField
          name="query"
          control={form.control}
          render={({ field }) => (
            <FormItem className="relative w-full space-y-0">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Search movies..."
                  className="px-3.5 py-2.5 border-none rounded-full text-xs text-black leading-[14px] placeholder-black font-normal bg-white
                  sm:text-sm sm:leading-4 sm:max-w-[165px] sm:py-[11px] sm:px-4
                  md:text-sm md:leading-4 md:py-[11px] md:px-4 md:max-w-[165px] 
                  xl:py-[13px] xl:max-w-[187px]"
                />
              </FormControl>
              <button
                type="submit"
                className="absolute mt-0 top-2.5 right-3.5 sm:top-[11px] sm:right-4 md:top-[13px]"
              >
                <Search />
              </button>
              <FormMessage className="absolute -bottom-4 left-[14px] text-white text-[10px] font-normal leading-3 sm:left-[16px]" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

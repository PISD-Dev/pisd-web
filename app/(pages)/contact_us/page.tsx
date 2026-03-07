import { ContactUsForm } from "@/components/contact_us_form";
import { Button } from "@/components/ui/button";
import { IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function WhereWeWork() {
  return (
    <main className="flex flex-col min-h-screen   items-center  bg-white dark:bg-black sm:items-start">
      <div className="bg-[#345995] w-full text-white py-3 text-center text-2xl">
        Lorem Ipsum Dolor
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_40%] w-full gap-6 py-10 px-20">
        <div className="flex flex-col gap-8 ">
          <div className="text-7xl font-bold text-[#345995]">Contact Us</div>
          <div className="flex flex-row gap-4 ">
            <Button className="rounded-4xl font-bold bg-[#345995] hover:bg-[#264270] text-md p-5">
              Got an Inquiry?
            </Button>
          </div>
          <div className="max-w-2xl flex flex-col gap-4 text-lg leading-relaxed text-gray-700">
            <p>
              We&apos;d love to hear from you. Whether you have a question about
              our work, want to learn more about our initiatives, or are
              interested in getting involved, our team is always happy to
              connect. We welcome inquiries from individuals, communities, and
              organizations who share an interest in the work we do.
            </p>

            <p>
              If you represent an organization, institution, or community group
              and would like to explore opportunities for partnership or
              collaboration, we would be glad to start the conversation. Please
              feel free to reach out using the contact form below, and a member
              of our team will respond as soon as possible.
            </p>
          </div>
          <Link className="flex gap-2 underline text-lg items-center" href="mailto:info@pisd.org.ph">
            <IconMail size={40}/> info@pisd.org.ph
          </Link>
        </div>
        <div className="flex justify-center border">
          <ContactUsForm />
        </div>
      </div>
    </main>
  );
}

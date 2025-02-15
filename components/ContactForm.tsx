//==========================  THis is code is working perfectly ========================//
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUser } from "@clerk/nextjs"; // Import useUser from Clerk
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/ui/CustomFormField";
import SubmitButton from "@/components/ui/SudmitButton";
import { ContactFormValidation } from "@/lib/validation";
import Modal from "@/components/ui/ContactModal"; // Import the Modal component

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
}

async function addDataToFireStore(
  userId: string | null,
  name: string,
  email: string,
  message: string
) {
  try {
    const now = new Date();
    const localTimeString = now.toLocaleString(); // This converts to local time

    const docRef = await addDoc(collection(db, "xpenda-contacts"), {
      userId: userId || "", // Provide a default value for userId
      name: name,
      email: email,
      message: message,
      timestamp: localTimeString, // Save the local time string
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}

const ContactForm = () => {
  const router = useRouter();
  const { user } = useUser(); // Get the currently authenticated user from Clerk
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [modalMessage, setModalMessage] = useState(""); // State for the modal message
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactFormValidation>) => {
    setIsLoading(true);
    try {
      const { name, email, message } = data;
      const userId = user ? user.id : null; // Get the user ID from Clerk

      const docId = await addDataToFireStore(userId, name, email, message);
      if (docId) {
        setIsModalOpen(true); // Open the modal
        setModalMessage("Thank you! Your message was received successfully."); // Set the message
        form.reset(); // Reset the form fields
      } else {
        console.error("Failed to add document.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="you@example.com"
        />
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          label="Message"
          placeholder="Type your message here..."
        />
        <SubmitButton isLoading={isLoading}>Submit message</SubmitButton>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </Form>
  );
};

export default ContactForm;

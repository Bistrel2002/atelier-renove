"use server";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: number;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  error?: string;
}

/**
 * Action serveur placeholder : valide la demande et simule l'envoi.
 * Brancher ici un envoi d'email (Resend, Nodemailer…) ou un CRM.
 */
export async function sendContact(
  payload: ContactPayload
): Promise<ContactResult> {
  if (!payload.name.trim() || payload.name.trim().length < 2) {
    return { ok: false, error: "Le nom est requis." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, error: "L'adresse email est invalide." };
  }
  if (!payload.message.trim() || payload.message.trim().length < 10) {
    return { ok: false, error: "Le message est trop court." };
  }

  // Latence réseau simulée
  await new Promise((r) => setTimeout(r, 900));
  console.log("[contact] demande de devis reçue :", payload.email);
  return { ok: true };
}

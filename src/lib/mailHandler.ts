export type MailHandlerOk = { ok: true; message?: string };
export type MailHandlerErr = { ok: false; error?: string };
export type MailHandlerResponse = MailHandlerOk | MailHandlerErr;

export async function submitToMailHandler(
  payload: Record<string, string>,
  endpoint = "/php/mail-handler.php",
): Promise<MailHandlerResponse> {
  const fd = new FormData();
  for (const [k, v] of Object.entries(payload)) fd.append(k, v);

  const res = await fetch(endpoint, { method: "POST", body: fd });
  let json: unknown = null;
  try {
    json = await res.json();
  } catch {
    // ignore
  }

  if (json && typeof json === "object" && "ok" in json) {
    return json as MailHandlerResponse;
  }

  return {
    ok: false,
    error: "Something went wrong. Please try again.",
  };
}


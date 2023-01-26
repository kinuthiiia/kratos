import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function MyApp({ Component, pageProps }) {
  const myCache = createEmotionCache({
    key: "mantine",
    prepend: false,
  });

  const router = useRouter();

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     if (!session) {
  //       router.push("/login");
  //     }
  //   });

  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       if (event === "SIGNED_IN") {
  //         router.push("/");
  //       }
  //       if (event === "SIGNED_OUT") {
  //         router.push("/signin");
  //       }
  //     }
  //   );
  // }, [supabase, router]);

  return (
    <MantineProvider
      emotionCache={myCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Prompt",
      }}
    >
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;

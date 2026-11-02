# Prisma — aprende tecnología haciendo

Plataforma educativa en español, construida como sitio estático para publicar en GitHub Pages. Incluye catálogo filtrable, detalle de cursos con lecciones, cuestionarios breves y registro/inicio de sesión con guardado de progreso en Supabase.

## Probar localmente

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor estático, por ejemplo `python3 -m http.server 8000`. La página y el catálogo funcionan sin configuración de Supabase. Las cuentas y el guardado en la nube se habilitan al completar los pasos siguientes.

## Activar cuentas y progreso en la nube

1. Crea un proyecto en [Supabase](https://supabase.com/dashboard) y espera a que termine de aprovisionarse.
2. En **SQL Editor**, ejecuta el contenido de [`supabase/schema.sql`](supabase/schema.sql). La tabla guarda el progreso por usuario, curso y lección; las políticas RLS hacen que cada estudiante solo pueda consultar y modificar sus propias filas.
3. En **Project Settings → API** (o **Connect**), copia el **Project URL** y la clave **anon/public**. Pégalos en `supabase-config.js`:

   ```js
   window.PRISMA_SUPABASE_CONFIG = {
     url: "https://TU-PROYECTO.supabase.co",
     anonKey: "TU_CLAVE_ANON_PUBLICA",
   };
   ```

4. En **Authentication → URL Configuration**, configura la URL de tu sitio como **Site URL** y agrega también `http://localhost:8000/**` a **Redirect URLs** para desarrollo local.
5. Publica el sitio. Al iniciar sesión o crear una cuenta, Prisma cargará el progreso de esa cuenta; al completar una lección lo guardará en Supabase.

La clave `anon`/public está diseñada para usarse en el navegador junto con políticas RLS. **Nunca** incluyas la clave `service_role` en este repositorio, en `supabase-config.js` ni en código de cliente: omite las políticas de seguridad.

Si las credenciales están vacías, el catálogo y las lecciones de demostración siguen disponibles; iniciar sesión y guardar progreso mostrarán un aviso para completar esta configuración. Las lecciones y cuestionarios son contenido de muestra listo para reemplazarse por material definitivo.

## Publicar en GitHub Pages

En GitHub, abre **Settings → Pages**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/(root)`, y guarda. GitHub publicará `index.html` automáticamente. Para activar cuentas en el sitio publicado, usa la URL de Pages en **Site URL** y en las URL permitidas de Supabase.

> Configurar `supabase-config.js` antes de publicar habilita la autenticación y hace pública la clave anon en el sitio. Esto es intencional: protege los datos mediante RLS, no mediante secretos en el navegador.

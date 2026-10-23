
import ky from "ky";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();

export const api = ky.create({
  hooks: {
    beforeRequest: [
      async ({ request }) => {
        const cookie = await jar.getCookieString(request.url);

        if (cookie) {
          request.headers.set("Cookie", cookie);
        }
      },
    ],

    afterResponse: [
      async ({ request, response }) => {
        const cookies = response.headers.getSetCookie();

        for (const cookie of cookies) {
          await jar.setCookie(cookie, request.url);
        }
      },
    ],
  },
});

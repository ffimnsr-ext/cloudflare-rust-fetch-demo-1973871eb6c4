addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const { test } = wasm_bindgen;
  await wasm_bindgen(wasm);

  const data = await test();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    status: 200,
  });
}

export default function SimpleAnalytics() {
  return (
    <>
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}

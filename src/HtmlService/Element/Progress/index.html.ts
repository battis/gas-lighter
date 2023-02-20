export default `
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://ssl.gstatic.com/docs/script/css/add-ons1.css"
    />
    <style>
      .battis.GasLighter.HtmlService.Element.Progress .progress {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="content">Loading…</div>
    <script>
      const thread = '<?= data.thread ?>';
      function updateProgress() {
        google.script.run
          .withSuccessHandler((progress) => {
            if (progress.complete) {
              google.script.host.close();
            } else {
              document.getElementById('content').innerHTML = progress.html;
              updateProgress();
            }
          })
          .getProgress(thread);
      }
      updateProgress();
    </script>
  </body>
</html>
`;

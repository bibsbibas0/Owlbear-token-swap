import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  OBR.tokenControls.create({
    id: "token-swap-button",
    filter: {
      every: [{ key: "layer", value: "CHARACTER" }]
    },
    controls: [
      {
        id: "swap-button",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
        tooltip: "Trocar Token",
        onClick: (context) => {
          for (const token of context.items) {
            const estados = token.metadata["daniel.estados"] || [];
            const atual = estados.indexOf(token.image.url);
            const proximo = estados[(atual + 1) % estados.length];

            OBR.scene.items.updateItems([{
              id: token.id,
              image: { url: proximo },
              metadata: {
                "daniel.estados": estados
              }
            }]);
          }
        }
      }
    ]
  });
});
});

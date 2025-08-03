console.log("Token Swap ativada!");

OBR.onReady(() => {
  OBR.contextMenu.create({
    id: "token-swap",
    icons: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
        label: "Trocar token",
        filter: {
          every: []
        }
      }
    ],
    onClick(context) {
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
  });
});
      }
    }
  });
});

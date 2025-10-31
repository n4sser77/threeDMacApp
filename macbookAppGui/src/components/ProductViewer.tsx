import useMacBookViewer from "../hooks/useMacBookViewer";
// import useMacBookStore from "../store";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookViewer();
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls ">
        <p className="info">MacBookPro 16" in silver / Space black</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={`bg-neutral-300  ${color == "#adb5bd" && "active"}`}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={`bg-neutral-900 ${color == "#2e2c2e" && "active"}`}
            />
          </div>

          <div className="size-control">
            <div>
              <p>14"</p>
            </div>
            <div>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-4xl">Render Canvas</p>
    </section>
  );
};

export default ProductViewer;

import DisPlayProducts from "../featuers/products/DisplayProducts";

function AllProductsPage() {
  return (
    <section className="layout py-6">
      <div className="text-center mb-6">
        <h2 className="uppercase text-[#202435] font-semibold text-2xl sm:text-3xl py-1 sm:py-2">
          All products
        </h2>
        <p className="text-[#9B9BB4] text-sm sm:text-base">
          All products with updated stocks.
        </p>
      </div>

      <DisPlayProducts pagination="bottom" limit={20} />
    </section>
  );
}

export default AllProductsPage;

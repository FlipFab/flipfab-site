export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-800 p-3 rounded-xl">
      <img src={product.image} className="rounded mb-2" />
      <h3>{product.title}</h3>
      <div className="line-through text-gray-500">₹{product.original}</div>
      <div className="gold text-lg">₹{product.price}</div>
      <a href={product.link} target="_blank" className="block mt-2 bg-yellow-600 text-black text-center py-2 rounded">
        Grab Deal
      </a>
    </div>
  )
}
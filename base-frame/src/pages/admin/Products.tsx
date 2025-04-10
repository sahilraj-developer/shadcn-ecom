"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Eye, Pencil, Trash, Plus } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5555/api/products/user/getproducts");
        const data = await res.json();
        if (data.status === "success") {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sortKey) {
      filtered = filtered.sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    return filtered;
  }, [products, search, sortKey, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = key => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };


  const handleView = (id:any) => {
    console.log("view")
   
    navigate(`/admin/products/view/${id}`)
    // Open a modal or route to /product/:id
  };

  const handleEdit = (id:any) => {

    navigate(`/admin/products/edit/${id}`)
    // toast(product.title + " selected for editing (modal or page)");
    // Open an edit modal or navigate to edit page
  };

  const handleDelete = async (id:any) => {
    try {
      const res = await fetch(`http://localhost:5555/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.status === "success") {
        toast.success("Product deleted");
        fetchProducts(); // Refresh product list
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Server error during delete");
    }
  };

  const handleAddProduct = () => {
    toast("Redirect to Add Product form or open a modal");
    // Use modal or route: router.push("/add-product");
  };





  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Report</h1>
        <Button className="flex items-center gap-2">
          <Plus size={16} /> Add Product
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <div className="overflow-auto rounded-lg shadow-md border">
        <Table>
          <TableCaption>A list of available products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead onClick={() => handleSort("title")} className="cursor-pointer">Title</TableHead>
              <TableHead onClick={() => handleSort("price")} className="cursor-pointer">Price</TableHead>
              <TableHead onClick={() => handleSort("category")} className="cursor-pointer">Category</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <TableRow key={i}>
                    {Array.from({ length: 9 }).map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : paginatedProducts.map((product:any) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded" />
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      <Badge>{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.discount}%</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.dateAdded}</TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell className="space-x-2">
                      <Button size="sm" variant="outline"  onClick={() => handleView(product._id)}><Eye size={16} /></Button>
                      <Button size="sm" variant="outline" onClick={() => handleEdit(product._id)} ><Pencil size={16} /></Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(product._id)}><Trash size={16} /></Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
          <ChevronLeft size={16} /> Prev
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
          Next <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Products;
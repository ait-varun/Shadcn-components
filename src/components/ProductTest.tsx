"use client";

import { LucideEdit3, Circle } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProductTest() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Anna Muller",
      role: "Project Manager",
      email: "anna.mueller@gmail.com",
      phone: "+41 79 123 4567",
      responsibilities:
        "Overall project management, coordination, and client liaison",
      status: "Active",
      editing: false,
    },
    // More products can be added here
  ]);

  const toggleEdit = (id: any) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, editing: !product.editing } : product
    );
    setProducts(updatedProducts);
  };

  const handleEditChange = (e: any, id: any) => {
    const { name, value } = e.target;
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, [name]: value } : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id: any) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      {" "}
      <Card className="flex flex-col ">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contact Information</TableHead>
                <TableHead>Responsibility</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      {product.editing ? (
                        <input
                          type="text"
                          name="name"
                          value={product.name}
                          onChange={(e) => handleEditChange(e, product.id)}
                          className="w-full"
                        />
                      ) : (
                        <span className="font-medium block w-20">
                          {product.name}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {product.editing ? (
                      <input
                        type="text"
                        name="role"
                        value={product.role}
                        onChange={(e) => handleEditChange(e, product.id)}
                        className="w-full"
                      />
                    ) : (
                      <span className="block w-28">{product.role}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.editing ? (
                      <input
                        type="text"
                        name="email"
                        value={product.email}
                        onChange={(e) => handleEditChange(e, product.id)}
                        className="w-full"
                      />
                    ) : (
                      <span>{product.email}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.editing ? (
                      <input
                        type="text"
                        name="responsibilities"
                        value={product.responsibilities}
                        onChange={(e) => handleEditChange(e, product.id)}
                        className="w-full"
                      />
                    ) : (
                      <span>{product.responsibilities}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.editing ? (
                      <input
                        type="text"
                        name="phone"
                        value={product.status}
                        onChange={(e) => handleEditChange(e, product.id)}
                        className="w-full"
                      />
                    ) : (
                      <span>{product.status}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost">
                          <LucideEdit3 className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onSelect={() => toggleEdit(product.id)}>
                          {product.editing ? "Save" : "Edit"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => deleteProduct(product.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        {/* <CardFooter>
    <div className="text-xs text-muted-foreground">
      Showing <strong>1-10</strong> of <strong>32</strong> products
    </div>
  </CardFooter> */}
      </Card>
    </>
  );
}

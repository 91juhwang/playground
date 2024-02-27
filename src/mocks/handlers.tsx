import { http, graphql, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://dummyjson.com/products/1', () => {
    return HttpResponse.json({
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    });
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            id: '6c6dba95-e027-4fe2-acab-e8c155a7f0ff',
            title: 'The Lord of The Rings'
          },
          {
            id: 'a2ae7712-75a7-47bb-82a9-8ed668e00fe3',
            title: 'The Matrix'
          },
          {
            id: '916fa462-3903-4656-9e76-3f182b37c56f',
            title: 'Star Wars: The Empire Strikes Back'
          }
        ]
      }
    });
  }),
  // http.get("/api/getTodos", (request, response, context) => {
  //   console.log(request)
  //   return response(
  //     context.status(200),
  //     context.json([
  //       { id: 1, todo: "Shop Groceries" },
  //       { id: 2, todo: "Send the parcels" },
  //     ])
  //   );
  // }),
];
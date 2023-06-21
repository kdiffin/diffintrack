package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	corsConfig := cors.New()
	app.Use(corsConfig)

	app.Get("/bru", func(c *fiber.Ctx) error {
		return c.JSON("Hello, World!")
	})

	app.Listen(":8000")
}

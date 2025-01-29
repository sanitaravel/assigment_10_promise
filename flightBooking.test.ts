import { describe, it } from "node:test";
import assert from "assert";
import { bookFlight } from "./flightBooking";

describe("bookFlight", () => {
  it("returns a booking confirmation message if avaliable", async () => {
    const bookingMessage = await bookFlight("New York", "Los Angeles");
    assert.strictEqual(
      bookingMessage,
      "Booking confirmed from New York to Los Angeles"
    );
  });
  it("throws an error if no flights are available", async () => {
    try {
      await bookFlight("New York", "Miami");
    } catch (error) {
      assert.strictEqual(
        error.message,
        "No flights available from New York to Miami"
      );
    }
  });
});

  

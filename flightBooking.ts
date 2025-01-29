const availableFlights = [
  { departure: "New York", destination: "Los Angeles" },
  { departure: "Chicago", destination: "Miami" },
  { departure: "San Francisco", destination: "Seattle" },
];

export async function bookFlight(
  departure: string,
  destination: string
): Promise<string> {
  return new Promise(
    (resolve: (message: string) => void = console.log, reject) => {
      const flightExists = availableFlights.some(
        (flight) =>
          flight.departure === departure && flight.destination === destination
      );

      if (flightExists) {
        resolve(`Booking confirmed from ${departure} to ${destination}`);
      } else {
        reject(
          new Error(`No flights available from ${departure} to ${destination}`)
        );
      }
    }
  );
}

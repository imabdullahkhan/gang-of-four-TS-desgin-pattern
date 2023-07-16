class MovieSelection {
  getMovie(id: number): string {
    // Simulating fetching movie details from a database
    // In a real application, this would involve database/API calls
    if (id === 1) {
      return "Avengers: Endgame";
    } else if (id === 2) {
      return "The Shawshank Redemption";
    } else {
      return "Movie not found";
    }
  }
}

// Subsystem 2: Seat Reservation
class SeatReservation {
  reserveSeats(movie: string, numSeats: number): string {
    // Simulating seat reservation logic
    return `Reserved ${numSeats} seats for ${movie}`;
  }
}

// Subsystem 3: Payment Processing
class PaymentProcessor {
  processPayment(amount: number): string {
    // Simulating payment processing logic
    return `Payment of $${amount.toFixed(2)} processed successfully`;
  }
}

// Subsystem 4: Confirmation
class Confirmation {
  sendConfirmation(email: string): string {
    // Simulating confirmation email sending logic
    return `Confirmation email sent to ${email}`;
  }
}

// Facade Class
class MovieTicketBookingFacade {
  private movieSelection: MovieSelection;
  private seatReservation: SeatReservation;
  private paymentProcessor: PaymentProcessor;
  private confirmation: Confirmation;

  constructor() {
    this.movieSelection = new MovieSelection();
    this.seatReservation = new SeatReservation();
    this.paymentProcessor = new PaymentProcessor();
    this.confirmation = new Confirmation();
  }

  bookMovieTicket(movieId: number, numSeats: number, email: string): string {
    const movie = this.movieSelection.getMovie(movieId);
    if (movie === "Movie not found") {
      return "Movie not available";
    }

    const reservation = this.seatReservation.reserveSeats(movie, numSeats);
    const totalAmount = numSeats * 10; // Assume ticket price is $10 per seat

    const paymentResult = this.paymentProcessor.processPayment(totalAmount);
    const confirmationResult = this.confirmation.sendConfirmation(email);

    return `${movie} - ${reservation}\n${paymentResult}\n${confirmationResult}`;
  }
}

// Usage example
function main() {
  const ticketBookingSystem = new MovieTicketBookingFacade();
  const bookingResult = ticketBookingSystem.bookMovieTicket(1, 3, "user@example.com");
  console.log(bookingResult);
}

main();
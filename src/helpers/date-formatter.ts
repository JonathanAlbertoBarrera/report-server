export class DateFormatter {
  // Para fechas (UTC)
  static formatterUTC = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC'
  });

  // Para fechas actuales (hora local)
  static formatterLocal = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
    // sin timeZone = usa la local automáticamente
  });

  // Para fechas de BD
  static getDDMMMMYYYYFromDB(date: Date | string): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return this.formatterUTC.format(date);
  }

  // Para fecha actual
  static getCurrentDateFormatted(): string {
    return this.formatterLocal.format(new Date());
  }
}
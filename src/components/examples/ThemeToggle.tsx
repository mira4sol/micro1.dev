import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <div className="p-8">
      <p className="text-muted-foreground mb-4">Click the button to toggle dark/light mode:</p>
      <ThemeToggle />
    </div>
  );
}

import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div className={clsx("rounded-2xl border bg-white shadow-sm p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={clsx("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={clsx("text-xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={clsx("text-gray-500 text-sm", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={clsx("text-base", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={clsx("mt-4 border-t pt-4", className)} {...props}>
      {children}
    </div>
  );
}

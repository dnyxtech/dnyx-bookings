import { APP_NAME } from "@calcom/lib/constants"; // DNYX-PATCH: branding
import classNames from "@calcom/ui/classNames";

export function Logo({
  small,
  icon,
  inline = true,
  className,
  src = "/api/logo",
}: {
  small?: boolean;
  icon?: boolean;
  inline?: boolean;
  className?: string;
  src?: string;
}) {
  return (
    <h3 className={classNames("logo", inline && "inline", className)}>
      <strong>
        {/* DNYX-PATCH: branding - alt/title use APP_NAME; in dark mode brightness-0 + invert shows the
            logo all-white (plain invert would turn the magenta mark green). */}
        {icon ? (
          <img
            className="mx-auto w-9 dark:brightness-0 dark:invert"
            alt={APP_NAME}
            title={APP_NAME}
            src={`${src}?type=icon`}
          />
        ) : (
          <img
            className={classNames(small ? "h-4 w-auto" : "h-5 w-auto", "dark:brightness-0 dark:invert")}
            alt={APP_NAME}
            title={APP_NAME}
            src={src}
          />
        )}
      </strong>
    </h3>
  );
}

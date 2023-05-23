import { Link } from "react-router-dom";
import React, { ReactNode } from "react";
import "./index.scss";

interface ButtonProps {
  type?: "button" | "link";
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string | string[];
  isPrimary?: boolean;
  isDisabled?: boolean;
  isLoading?: "true" | "false";
  isSmall?: boolean;
  isLight?: boolean;
  isLarge?: boolean;
  isBlock?: boolean;
  isSecondary?: boolean;
  isEbook?: boolean;
  isOrange?: boolean;
  isOutlined?: boolean;
  isGlowHover?: boolean;
  isExternal?: boolean;
  hasShadow?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export default function Button(props: ButtonProps): JSX.Element {
  const className = Array.isArray(props.className)
    ? props.className
    : [props.className];

  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isLight) className.push("btn-light");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.isSecondary) className.push("btn-secondary");
  if (props.isEbook) className.push("btn-ebook");
  if (props.isOrange) className.push("btn-orange");
  if (props.isOutlined) className.push("btn-outline-primary");
  if (props.isGlowHover) className.push("btn-glow");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading == "true") {
    if (props.isDisabled) className.push("disabled");

    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading === "true" ? (
          <>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href ?? ""}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      ref={props.href as string}
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

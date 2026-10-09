import React, { ElementType } from 'react';

// --- TÍTULO PRINCIPAL ---
type TitleProps = {
  children: React.ReactNode;
  icon?: ElementType;
  imageUrl?: string;
};

export const Title = ({ children, icon: Icon, imageUrl }: TitleProps) => {
  return (
    <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-primary/20">
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt="Title image"
          className="w-14 h-14 rounded-lg object-cover shadow-sm"
        />
      )}
      {Icon && <Icon size={40} className="text-primary" />}
      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
        {children}
      </h1>
    </div>
  );
};

type HeadingProps = {
  id: string;
  children: React.ReactNode;
};

export const Section = ({ id, children }: HeadingProps) => (
  <h2
    id={id}
    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-20"
  >
    {children}
  </h2>
);

export const Subsection = ({ id, children }: HeadingProps) => (
  <h3
    id={id}
    className="text-2xl font-semibold text-foreground mt-8 mb-4 scroll-mt-20"
  >
    {children}
  </h3>
);

export const Subsubsection = ({ id, children }: HeadingProps) => (
  <h4
    id={id}
    className="text-xl font-medium text-foreground mt-6 mb-3 scroll-mt-20"
  >
    {children}
  </h4>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-foreground/80 leading-relaxed mb-6">{children}</p>
);

export const List = ({
  children,
  ordered = false,
}: {
  children: React.ReactNode;
  ordered?: boolean;
}) => {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag
      className={`mb-6 ml-6 space-y-2 text-lg text-foreground/80 ${ordered ? 'list-decimal' : 'list-disc'}`}
    >
      {children}
    </Tag>
  );
};

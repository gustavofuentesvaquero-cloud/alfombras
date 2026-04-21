import Image from "next/image";

interface AuthorBioProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export default function AuthorBio({ name, role, bio, imageUrl }: AuthorBioProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-sand/5 rounded-lg border border-sand/20 mt-8 mb-12">
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 bg-sand/20 flex-shrink-0 flex items-center justify-center">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <span className="text-mocha font-serif text-2xl">{name.charAt(0)}</span>
        )}
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-serif font-semibold text-lg text-foreground">{name}</h3>
        <p className="text-sage text-sm mb-2">{role}</p>
        <p className="text-foreground/80 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

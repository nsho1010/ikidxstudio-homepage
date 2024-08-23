import React from 'react';

const ColorPalette: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--background))' }}></div>
        <div className="mt-2 text-sm text-center">Background</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--card))' }}></div>
        <div className="mt-2 text-sm text-center">Card</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--card-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Card Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--popover))' }}></div>
        <div className="mt-2 text-sm text-center">Popover</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--popover-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Popover Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
        <div className="mt-2 text-sm text-center">Primary</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--primary-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Primary Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--secondary))' }}></div>
        <div className="mt-2 text-sm text-center">Secondary</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--secondary-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Secondary Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--muted))' }}></div>
        <div className="mt-2 text-sm text-center">Muted</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--muted-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Muted Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
        <div className="mt-2 text-sm text-center">Accent</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--accent-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Accent Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--destructive))' }}></div>
        <div className="mt-2 text-sm text-center">Destructive</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--destructive-foreground))' }}></div>
        <div className="mt-2 text-sm text-center">Destructive Foreground</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--border))' }}></div>
        <div className="mt-2 text-sm text-center">Border</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--input))' }}></div>
        <div className="mt-2 text-sm text-center">Input</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: 'hsl(var(--ring))' }}></div>
        <div className="mt-2 text-sm text-center">Ring</div>
      </div>
    </div>
  );
};

export default ColorPalette;
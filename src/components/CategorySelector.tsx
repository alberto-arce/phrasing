'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface Category {
  id: string;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

export const CategorySelector = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategorySelectorProps) => (
  <div className="w-full py-4 flex flex-col gap-4 items-center justify-center">
    <div className="hidden md:flex w-full flex-wrap gap-4 justify-center items-start">
      <Tabs
        value={selectedCategory}
        onValueChange={onCategoryChange}
        className="w-full md:w-auto"
      >
        <TabsList className="flex flex-wrap gap-4 rounded-2xl p-2 shadow-none border-0 flex-row flex-wrap w-full min-h-fit h-auto items-start content-start bg-transparent dark:bg-transparent">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className={
                selectedCategory === cat.id
                  ? 'bg-pink-500 text-white shadow-lg scale-105 ring-4 ring-pink-400/70 dark:bg-pink-400 dark:text-gray-900 dark:ring-pink-300/80 border-2 border-pink-400 dark:border-pink-300'
                  : 'bg-white dark:bg-gray-900 text-pink-700 dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-gray-700 border border-transparent'
              }
            >
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
    {/* Select para móvil */}
    <div className="md:hidden w-full">
      <Select onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full bg-white dark:bg-gray-900 border-2 border-pink-200 dark:border-pink-900 rounded-xl py-3 shadow-md">
          <SelectValue placeholder="Elige una categoría" />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-900 border-2 border-pink-200 dark:border-pink-900 rounded-xl shadow-xl">
          {categories.map((cat) => (
            <SelectItem
              key={cat.id}
              value={cat.id}
              className="capitalize py-2.5 hover:bg-pink-50 dark:hover:bg-gray-700 focus:bg-pink-100 dark:focus:bg-gray-700 rounded-lg my-1"
            >
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);

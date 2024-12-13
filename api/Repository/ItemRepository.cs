using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Item;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ItemRepository : IItemRepository
    {
        private readonly ApplicationDBContext _context;

        public ItemRepository(ApplicationDBContext context) {
            _context = context;
        }

        public async Task<Item> CreateAsync(Item itemModel)
        {
            await _context.Item.AddAsync(itemModel);
            await _context.SaveChangesAsync();
            return itemModel;
        }

        public async Task<Item?> DeleteAsync(int id)
        {
            var itemModel = await _context.Item.FirstOrDefaultAsync(x => x.Id == id);   
            if (itemModel == null) {
                return null;
            }

            _context.Item.Remove(itemModel);
            await _context.SaveChangesAsync();

            return itemModel;
        }

        public async Task<List<Item>> GetAllAsync()
        {
            return await _context.Item.ToListAsync();
        }

        public async Task<Item?> GetByIdAsync(int id)
        {
            return await _context.Item.FindAsync(id);
        }

        public async Task<Item?> UpdateAsync(int id, UpdateItemRequestDto itemDto)
        {
            var existingItem = await _context.Item.FirstOrDefaultAsync(x => x.Id == id);

            if (existingItem == null) {
                return null;
            }

            existingItem.Description = itemDto.Description;
            existingItem.Price = itemDto.Price;

            await _context.SaveChangesAsync();

            return existingItem;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using api.Mappers;
using api.Dtos.Item;
using Microsoft.EntityFrameworkCore;
using api.Interfaces;

namespace api.Controllers
{
    [Route("api/item")]
    [ApiController]
    public class ItemController : ControllerBase {
        private readonly ApplicationDBContext _context;
        private readonly IItemRepository _itemRepo;
        public ItemController(ApplicationDBContext context, IItemRepository itemRepo) {
            _itemRepo = itemRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var item = await _itemRepo.GetAllAsync();
            var itemDto = item.Select(s => s.ToItemDto());
            return Ok(item);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id) {
            var item = await _itemRepo.GetByIdAsync(id);

            if (item == null) {
                return NotFound();
            }

            return Ok(item.ToItemDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateItemRequestDto itemDto) {

            var itemModel = itemDto.ToItemFromCreateDto();
            await _itemRepo.CreateAsync(itemModel);

            return CreatedAtAction(nameof(GetById), new { id = itemModel.Id }, itemModel.ToItemDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateItemRequestDto updateDto) {

            var itemModel = await _itemRepo.UpdateAsync(id, updateDto);

            if(itemModel == null)
            {
                return NotFound();
            }


            return Ok(itemModel.ToItemDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id) {
            var itemModel = await _itemRepo.DeleteAsync(id);

            if(itemModel == null)
            {
                return NotFound();
            }

            return NoContent();

        }
    }
}
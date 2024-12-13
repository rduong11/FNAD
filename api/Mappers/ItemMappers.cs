using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Dtos.Item;

namespace api.Mappers
{
    public static class ItemMappers
    {
        public static ItemDto ToItemDto(this Item itemModel) {

            return new ItemDto {
                Id = itemModel.Id,
                Name = itemModel.Name,
                Price = itemModel.Price
            };
        }

        public static Item ToItemFromCreateDto(this CreateItemRequestDto itemDto) {

            return new Item{
                Name = itemDto.Name,
                Price = itemDto.Price,
            };
        }
    }
}